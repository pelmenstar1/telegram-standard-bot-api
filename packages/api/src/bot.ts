import { BotMethodInfo } from './method.js';

export type TelegramBot = {
  <R>(method: BotMethodInfo<R>): Promise<R>;
  setApiKey(value: string): void;
};

type FetchBodyInit = Pick<RequestInit, 'method' | 'body' | 'headers'>;

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

export function createTelegramBot(options?: TelegramBotOptions): TelegramBot {
  let apiKey = options?.apiKey;

  const result = async <R>({ name, payload }: BotMethodInfo<R>): Promise<R> => {
    if (apiKey === undefined) {
      throw new Error('No bot API key');
    }

    const fetchFn = options?.fetch ?? fetch;

    const headers: HeadersInit = {};
    if (typeof payload === 'string') {
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetchFn(
      `https://api.telegram.org/bot${apiKey}/${name}`,
      {
        method: 'POST',
        body: payload,
        headers,
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

export const bot = createTelegramBot();
