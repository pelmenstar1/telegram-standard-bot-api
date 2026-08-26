import {
  jsonRequestInitializerFactory,
  RequestInitializer,
  RequestInitializerFactory,
} from './requestInitializer.js';

type PayloadType = Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface BotMethodInfo<R> {
  /**
   * The name of the method to call. It must be a valid method name of the Telegram Bot API.
   */
  name: string;

  /**
   * An initializer that will be called to initialize the request. If not provided, the request will be sent without a body.
   */
  initializer?: RequestInitializer | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function botMethod<F extends (payload?: any) => unknown>(
  name: string,
  initializerFactory?: RequestInitializerFactory<Parameters<F>[0]>
): (...args: Parameters<F>) => BotMethodInfo<ReturnType<F>>;

export function botMethod<T extends PayloadType, R>(
  name: string,
  initializerFactory: RequestInitializerFactory<T> = jsonRequestInitializerFactory
) {
  return (payload?: T) => {
    const result: BotMethodInfo<R> = { name };

    if (payload !== undefined) {
      result.initializer = initializerFactory(payload);
    }

    return result;
  };
}
