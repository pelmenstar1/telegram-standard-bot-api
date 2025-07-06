import { jsonPayloadTransformer, PayloadTransformer } from './payload';

type PayloadType = Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface BotMethodInfo<R> {
  name: string;
  payload?: BodyInit;
}

export function botMethod<R>(
  name: string,
  payloadTransformer?: PayloadTransformer
): () => BotMethodInfo<R>;

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export function botMethod<T extends PayloadType, R>(
  name: string,
  payloadTransformer?: PayloadTransformer
): (payload: T) => BotMethodInfo<R>;

export function botMethod<T extends PayloadType, R>(
  name: string,
  payloadTransformer: PayloadTransformer = jsonPayloadTransformer
) {
  return (payload?: T): BotMethodInfo<R> => {
    const result: Partial<BotMethodInfo<R>> = { name };

    if (payload !== undefined) {
      result.payload = payloadTransformer(payload);
    }

    return result as BotMethodInfo<R>;
  };
}
