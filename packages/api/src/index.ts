import { BotMethodInfo } from './method';

export type TelegramBot = {
  <R>(method: BotMethodInfo<R>): Promise<R>;
  setApiKey(value: string): void;
};

type FetchBodyInit = Pick<RequestInit, 'method' | 'body'>;

export type TelegramBotOptions = {
  apiKey: string;
  fetch?: (url: string, init?: FetchBodyInit) => Promise<Response>;
};

type TelegramResponse<T> =
  | {
      ok: true;
      result: T;
    }
  | {
      ok: false;
      description: string;
    };

export function createTelegramBot(options: TelegramBotOptions): TelegramBot {
  let { apiKey } = options;

  const result = async <R>(method: BotMethodInfo<R>): Promise<R> => {
    const fetchFn = options.fetch ?? fetch;

    const response = await fetchFn(
      `https://api.telegram.org/${apiKey}/${method.name}`,
      {
        method: 'POST',
        body: method.payload,
      }
    );

    const responseData = (await response.json()) as TelegramResponse<R>;
    if (responseData.ok) {
      return responseData.result;
    }

    throw new Error(responseData.description);
  };

  (result as TelegramBot).setApiKey = (value) => {
    apiKey = value;
  };

  return result as TelegramBot;
}
