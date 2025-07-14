import { jsonPayloadTransformer, PayloadTransformer } from './payload.js';

type PayloadType = Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface BotMethodInfo<R> {
  name: string;
  payload?: BodyInit;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function botMethod<F extends (payload?: any) => unknown>(
  name: string,
  payloadTransformer?: PayloadTransformer
): (...args: Parameters<F>) => BotMethodInfo<ReturnType<F>>;

export function botMethod<T extends PayloadType, R>(
  name: string,
  payloadTransformer: PayloadTransformer = jsonPayloadTransformer
) {
  return (payload?: T): BotMethodInfo<R> => {
    const result: BotMethodInfo<R> = { name };

    if (payload !== undefined) {
      result.payload = payloadTransformer(payload);
    }

    return result;
  };
}
