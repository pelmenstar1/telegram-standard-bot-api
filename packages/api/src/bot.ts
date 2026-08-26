import { TelegramError, TelegramErrorOptions } from './error.js';
import { BotMethodInfo } from './method.js';
import { ResponseParameters } from './types.generated.js';
import { delay } from './utils.js';

export type TelegramBot = {
  /** Calls a method of the Telegram Bot API. It will fail if the API key is not set. */
  <R>(method: BotMethodInfo<R>): Promise<R>;

  /** Modifies the API key used by the bot. */
  setApiKey(value: string): void;
};

type FetchBodyInit = Pick<RequestInit, 'method' | 'body' | 'headers'>;

export type TelegramBotOptions = {
  /**
   * Bot API key to use for making requests. Can be set later using {@link TelegramBot.setApiKey}.
   */
  apiKey?: string | undefined;

  /**
   * Custom fetch function to use for making HTTP requests. Defaults to the global {@link fetch} function.
   */
  fetch?:
    ((url: string, init?: FetchBodyInit) => Promise<Response>) | undefined;

  /**
   * How many times a request may be repeated when Telegram API answers with
   * {@link ResponseParameters.retry_after}, zero disables retrying.
   *
   * @default 3
   */
  maxRetryCount?: number | undefined;
};

const DEFAULT_MAX_RETRY_COUNT = 3;

type ErrorTelegramResponse = {
  ok: false;
  description?: string;
  error_code?: number;
  parameters?: ResponseParameters;
};

type TelegramResponse<T> =
  | {
      ok: true;
      result: T;
    }
  | ErrorTelegramResponse;

function throwRequestError(
  name: string,
  response?: Response,
  responseData?: ErrorTelegramResponse,
  causeError?: unknown
): never {
  const description = responseData?.description;
  const options: TelegramErrorOptions = {
    code: responseData?.error_code,
    description,
    httpStatus: response?.status,
  };

  if (causeError !== undefined) {
    options.cause = causeError;
  }

  let message = `Failed to call method '${name}'`;

  if (response !== undefined) {
    const { status } = response;

    message += ` (${status})`;
  }

  if (description) {
    message += `: ${description}`;
  }

  throw new TelegramError(message, options);
}

export function createTelegramBot(options?: TelegramBotOptions): TelegramBot {
  let apiKey = options?.apiKey;
  const maxRetryCount = options?.maxRetryCount ?? DEFAULT_MAX_RETRY_COUNT;

  const result = async <R>({
    name,
    initializer,
  }: BotMethodInfo<R>): Promise<R> => {
    if (apiKey === undefined) {
      throw new Error('No bot API key');
    }

    const fetchFn = options?.fetch ?? fetch;
    const url = `https://api.telegram.org/bot${apiKey}/${name}`;

    const init: RequestInit = {
      method: 'POST',
    };

    initializer?.(init);

    for (let retryCount = 0; ; retryCount++) {
      let causeError: unknown;
      let response: Response | undefined;
      let responseData: ErrorTelegramResponse | undefined;

      try {
        response = await fetchFn(url, init);

        const data = (await response.json()) as TelegramResponse<R>;
        if (data.ok) {
          return data.result;
        }

        responseData = data;
      } catch (error) {
        causeError = error;
      }

      const retryAfter = responseData?.parameters?.retry_after;
      if (retryAfter === undefined || retryCount >= maxRetryCount) {
        throwRequestError(name, response, responseData, causeError);
      }

      // retryAfter is in seconds.
      await delay(retryAfter * 1000);
    }
  };

  result.setApiKey = (value: string) => {
    apiKey = value;
  };

  return result;
}

export const bot = /* @__PURE__ */ createTelegramBot();
