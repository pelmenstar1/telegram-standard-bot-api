import { describe, expectTypeOf, test } from 'vitest';

import { bot } from '../bot.js';
import { BotMethodInfo, botMethod } from '../method.js';
import {
  formDataRequestInitializerFactory,
  jsonRequestInitializerFactory,
  RequestInitializer,
  RequestInitializerFactory,
} from '../requestInitializer.js';

type Payload = { chat_id: string; message_id?: number };
type Chat = { id: number };
type User = { username: string };

const noopInitializer: RequestInitializer = () => undefined;

describe('parameters', () => {
  test('mirror the payload of the described method', () => {
    const getChat = botMethod<(payload: Payload) => Chat>('getChat');

    expectTypeOf(getChat).toBeCallableWith({ chat_id: '@durov' });
    expectTypeOf(getChat).toBeCallableWith({
      chat_id: '@durov',
      message_id: 1,
    });
  });

  test('are empty for a method without a payload', () => {
    const getMe = botMethod<() => User>('getMe');

    expectTypeOf(getMe).toBeCallableWith();
  });

  test('stay optional when the payload is optional', () => {
    const getChat = botMethod<(payload?: Payload) => Chat>('getChat');

    expectTypeOf(getChat).toBeCallableWith();
    expectTypeOf(getChat).toBeCallableWith({ chat_id: '@durov' });
  });
});

describe('result', () => {
  test('is the method info', () => {
    const getChat = botMethod<(payload: Payload) => Chat>('getChat');

    expectTypeOf(getChat({ chat_id: '@durov' })).toEqualTypeOf<
      BotMethodInfo<Chat>
    >();
  });

  test('carries the method result into the bot call', () => {
    const getChat = botMethod<(payload: Payload) => Chat>('getChat');
    const getMe = botMethod<() => User>('getMe');

    expectTypeOf(bot(getChat({ chat_id: '@durov' }))).toEqualTypeOf<
      Promise<Chat>
    >();
    expectTypeOf(bot(getMe())).toEqualTypeOf<Promise<User>>();
  });
});

describe('initializer factory', () => {
  test('is contextually typed with the payload', () => {
    botMethod<(payload: Payload) => Chat>('getChat', (payload) => {
      expectTypeOf(payload).toEqualTypeOf<Payload>();

      return noopInitializer;
    });
  });

  test('accepts the built-in factories', () => {
    botMethod<(payload: Payload) => Chat>(
      'getChat',
      jsonRequestInitializerFactory
    );
    botMethod<(payload: Payload) => Chat>(
      'getChat',
      formDataRequestInitializerFactory
    );
  });

  test('rejects a factory built for another payload', () => {
    const otherFactory: RequestInitializerFactory<{ other: boolean }> = () =>
      noopInitializer;

    // @ts-expect-error the factory has to accept the method payload
    botMethod<(payload: Payload) => Chat>('getChat', otherFactory);
  });
});
