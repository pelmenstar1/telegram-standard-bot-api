import { describe, expect, test } from 'vitest';

import { createTelegramBot } from '../bot.js';
import { botMethod } from '../method.js';
import { GetChat } from '../methods.js';
import {
  formDataRequestInitializerFactory,
  jsonRequestInitializerFactory,
  RequestInitializer,
} from '../requestInitializer.js';
import { getBotKey } from './testUtils.js';
import { Chat } from '../types.generated.js';

function initRequest(
  initializer: RequestInitializer,
  request: RequestInit = {}
): RequestInit {
  initializer(request);

  return request;
}

function expectFormData(body: BodyInit | null | undefined): FormData {
  expect(body).toBeInstanceOf(FormData);
  if (!(body instanceof FormData)) {
    throw new Error('Cannot happen');
  }

  return body;
}

function expectBlob(value: FormDataEntryValue | null): Blob {
  expect(value).toBeInstanceOf(Blob);
  if (!(value instanceof Blob)) {
    throw new Error('Cannot happen');
  }

  return value;
}

function getHeader(init: HeadersInit | undefined, key: string) {
  return new Headers(init).get(key);
}

describe('jsonRequestInitializerFactory', () => {
  test('serializes the payload as JSON', () => {
    const request = initRequest(
      jsonRequestInitializerFactory({ chat_id: '@durov', text: 'hi' })
    );

    expect(request.body).toBe('{"chat_id":"@durov","text":"hi"}');
  });

  test('sets the JSON content type when there are no headers', () => {
    const request = initRequest(jsonRequestInitializerFactory({}));

    expect(getHeader(request.headers, 'Content-Type')).toBe('application/json');
  });

  test('sets the JSON content type on plain object headers', () => {
    const request = initRequest(jsonRequestInitializerFactory({}), {
      headers: { 'X-Test': '1' },
    });

    expect(getHeader(request.headers, 'Content-Type')).toBe('application/json');
    expect(getHeader(request.headers, 'X-Test')).toBe('1');
  });

  test('sets the JSON content type on Headers', () => {
    const headers = new Headers({ 'X-Test': '1' });
    const request = initRequest(jsonRequestInitializerFactory({}), { headers });

    expect(headers.get('Content-Type')).toBe('application/json');
    expect(getHeader(request.headers, 'X-Test')).toBe('1');
  });

  test('sets the JSON content type on tuple array headers', () => {
    const request = initRequest(jsonRequestInitializerFactory({}), {
      headers: [['X-Test', '1']],
    });

    expect(getHeader(request.headers, 'Content-Type')).toBe('application/json');
    expect(getHeader(request.headers, 'X-Test')).toBe('1');
  });
});

describe('formDataRequestInitializerFactory', () => {
  test('writes primitive values as strings', () => {
    const request = initRequest(
      formDataRequestInitializerFactory({
        chat_id: '@durov',
        message_id: 42,
        disable_notification: true,
        big: 10n,
      })
    );

    const body = expectFormData(request.body);
    expect(body.get('chat_id')).toBe('@durov');
    expect(body.get('message_id')).toBe('42');
    expect(body.get('disable_notification')).toBe('true');
    expect(body.get('big')).toBe('10');
  });

  test('serializes objects and arrays as JSON', () => {
    const request = initRequest(
      formDataRequestInitializerFactory({
        reply_markup: { force_reply: true },
        entities: [{ type: 'bold', offset: 0, length: 2 }],
      })
    );

    const body = expectFormData(request.body);
    expect(body.get('reply_markup')).toBe('{"force_reply":true}');
    expect(body.get('entities')).toBe(
      '[{"type":"bold","offset":0,"length":2}]'
    );
  });

  test('skips undefined and null values', () => {
    const request = initRequest(
      formDataRequestInitializerFactory({
        chat_id: 1,
        caption: undefined,
        reply_markup: null,
      })
    );

    const body = expectFormData(request.body);
    expect(body.has('caption')).toBe(false);
    expect(body.has('reply_markup')).toBe(false);
    expect([...body.keys()]).toEqual(['chat_id']);
  });

  test('passes a Blob through as is', async () => {
    const photoData = 'image-bytes';
    const type = 'image/png';
    const photo = new Blob([photoData], { type });
    const request = initRequest(formDataRequestInitializerFactory({ photo }));

    const body = expectFormData(request.body);
    const entry = expectBlob(body.get('photo'));
    expect(entry.type).toBe(type);
    await expect(entry.text()).resolves.toEqual(photoData);
  });

  test('wraps a Uint8Array into an octet-stream Blob', async () => {
    const data = new Uint8Array([1, 2, 3]);
    const request = initRequest(
      formDataRequestInitializerFactory({
        document: data,
      })
    );

    const body = expectFormData(request.body);
    const entry = expectBlob(body.get('document'));
    expect(entry.type).toBe('application/octet-stream');
    await expect(entry.bytes()).resolves.toEqual(data);
  });
});

const botKey = getBotKey();

test.runIf(botKey !== undefined)(
  'formDataRequestInitializerFactory sends a real request',
  async () => {
    if (botKey === undefined) {
      throw new Error('Cannot happen');
    }

    const bot = createTelegramBot();
    bot.setApiKey(botKey);
    await bot(
      botMethod<(payload: GetChat) => Chat>(
        'getChat',
        formDataRequestInitializerFactory
      )({ chat_id: '@durov' })
    );
  }
);
