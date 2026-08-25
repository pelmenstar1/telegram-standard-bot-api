import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { createTelegramBot, TelegramBotOptions } from '../bot.js';
import { TelegramError } from '../error.js';
import { getChat, getMe } from '../methods.js';
import { getBotKey } from './testUtils.js';

type FetchFn = NonNullable<TelegramBotOptions['fetch']>;
type FetchCall = { url: string; init: Parameters<FetchFn>[1] };

function createFetch(
  handler: (call: FetchCall) => Response | Promise<Response>
) {
  const calls: FetchCall[] = [];

  const fetch: FetchFn = (url, init) => {
    const call: FetchCall = { url, init };
    calls.push(call);

    return Promise.resolve(handler(call));
  };

  return { fetch, calls };
}

function okResponse(result: unknown) {
  return new Response(JSON.stringify({ ok: true, result }));
}

function floodResponse(retryAfter?: number) {
  return new Response(
    JSON.stringify({
      ok: false,
      error_code: 429,
      description: 'Too Many Requests: retry later',
      parameters: retryAfter === undefined ? {} : { retry_after: retryAfter },
    }),
    { status: 429 }
  );
}

function okFetch(result: unknown) {
  return createFetch(() => okResponse(result));
}

/**
 * Answers each request with the next response, so that a retried request gets
 * a different answer than the one that asked for the retry.
 */
function createSequenceFetch(responses: readonly Response[]) {
  let index = 0;

  return createFetch(() => {
    const response = responses[index++];

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (response === undefined) {
      throw new Error(`Unexpected request #${index}`);
    }

    return response;
  });
}

async function expectTelegramError(promise: Promise<unknown>) {
  const error: unknown = await promise.then(
    (value) => {
      throw new Error(`Expected a rejection, got ${JSON.stringify(value)}`);
    },
    (reason: unknown) => reason
  );

  expect(error).toBeInstanceOf(TelegramError);
  if (!(error instanceof TelegramError)) {
    throw new Error('Cannot happen');
  }

  return error;
}

describe('request', () => {
  test('posts to the method url of the Bot API', async () => {
    const { fetch, calls } = okFetch({ id: 1 });
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    await bot(getMe());

    expect(calls).toHaveLength(1);
    expect(calls[0]?.url).toBe('https://api.telegram.org/botkey/getMe');
    expect(calls[0]?.init?.method).toBe('POST');
  });

  test('sends no body for a method without a payload', async () => {
    const { fetch, calls } = okFetch({ id: 1 });
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    await bot(getMe());

    expect(calls[0]?.init?.body).toBeUndefined();
    expect(calls[0]?.init?.headers).toBeUndefined();
  });

  test('lets the method initializer fill in the request', async () => {
    const { fetch, calls } = okFetch({ id: 1 });
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    await bot(getChat({ chat_id: '@durov' }));

    const init = calls[0]?.init;
    expect(init?.body).toBe('{"chat_id":"@durov"}');
    expect(new Headers(init?.headers).get('Content-Type')).toBe(
      'application/json'
    );
  });

  test('returns the result of a successful response', async () => {
    const { fetch } = okFetch({ id: 42, type: 'private' });
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const result = await bot(getChat({ chat_id: '@durov' }));

    expect(result.id).toBe(42);
  });

  test('throws when there is no api key', async () => {
    const bot = createTelegramBot();

    await expect(bot(getMe())).rejects.toThrow('No bot API key');
  });

  test('uses the api key given to setApiKey', async () => {
    const { fetch, calls } = okFetch({ id: 1 });
    const bot = createTelegramBot({ apiKey: 'first', fetch });

    bot.setApiKey('second');
    await bot(getMe());

    expect(calls[0]?.url).toBe('https://api.telegram.org/botsecond/getMe');
  });
});

describe('errors', () => {
  test('reports a Bot API error response', async () => {
    const { fetch } = createFetch(
      () =>
        new Response(
          JSON.stringify({
            ok: false,
            error_code: 400,
            description: 'Bad Request: chat not found',
          }),
          { status: 400 }
        )
    );
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const error = await expectTelegramError(bot(getChat({ chat_id: 'nope' })));

    expect(error.message).toBe(
      "Failed to call method 'getChat' (400): Bad Request: chat not found"
    );
    expect(error.code).toBe(400);
    expect(error.httpStatus).toBe(400);
    expect(error.description).toBe('Bad Request: chat not found');
    expect(error.cause).toBeUndefined();
  });

  test('reports an error response without a description', async () => {
    const { fetch } = createFetch(
      () => new Response(JSON.stringify({ ok: false }), { status: 500 })
    );
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const error = await expectTelegramError(bot(getMe()));

    expect(error.message).toBe("Failed to call method 'getMe' (500)");
    expect(error.code).toBeUndefined();
    expect(error.httpStatus).toBe(500);
    expect(error.description).toBeUndefined();
  });

  test('reports a response body that is not JSON', async () => {
    const { fetch } = createFetch(
      () => new Response('<html>Bad Gateway</html>', { status: 502 })
    );
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const error = await expectTelegramError(bot(getMe()));

    expect(error.message).toBe("Failed to call method 'getMe' (502)");
    expect(error.httpStatus).toBe(502);
    expect(error.cause).toBeInstanceOf(Error);
  });

  test('reports a failed fetch as the cause', async () => {
    const cause = new Error('network down');
    const { fetch } = createFetch(() => Promise.reject(cause));
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const error = await expectTelegramError(bot(getMe()));

    expect(error.message).toBe("Failed to call method 'getMe'");
    expect(error.cause).toBe(cause);
    expect(error.httpStatus).toBeUndefined();
    expect(error.code).toBeUndefined();
  });
});

describe('retry', () => {
  beforeEach(() => {
    // Only setTimeout is faked, reading a response body must stay real.
    vi.useFakeTimers({ toFake: ['setTimeout'] });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('repeats the request when the response asks to retry', async () => {
    const { fetch, calls } = createSequenceFetch([
      floodResponse(2),
      okResponse({ id: 7 }),
    ]);
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const promise = bot(getChat({ chat_id: '@durov' }));
    await vi.advanceTimersByTimeAsync(2000);

    await expect(promise).resolves.toEqual({ id: 7 });
    expect(calls).toHaveLength(2);
  });

  test('waits the requested number of seconds', async () => {
    const { fetch, calls } = createSequenceFetch([
      floodResponse(2),
      okResponse({ id: 7 }),
    ]);
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const promise = bot(getMe());

    await vi.advanceTimersByTimeAsync(1999);
    expect(calls).toHaveLength(1);

    await vi.advanceTimersByTimeAsync(1);
    expect(calls).toHaveLength(2);

    await promise;
  });

  test('repeats the very same request', async () => {
    const { fetch, calls } = createSequenceFetch([
      floodResponse(1),
      okResponse({ id: 7 }),
    ]);
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const promise = bot(getChat({ chat_id: '@durov' }));
    await vi.advanceTimersByTimeAsync(1000);
    await promise;

    expect(calls[1]?.url).toBe(calls[0]?.url);
    expect(calls[1]?.init?.method).toBe('POST');
    expect(calls[1]?.init?.body).toBe('{"chat_id":"@durov"}');
  });

  test('waits as long as every response asks', async () => {
    const { fetch, calls } = createSequenceFetch([
      floodResponse(1),
      floodResponse(3),
      okResponse({ id: 7 }),
    ]);
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const promise = bot(getMe());

    await vi.advanceTimersByTimeAsync(1000);
    expect(calls).toHaveLength(2);

    await vi.advanceTimersByTimeAsync(2999);
    expect(calls).toHaveLength(2);

    await vi.advanceTimersByTimeAsync(1);
    expect(calls).toHaveLength(3);

    await promise;
  });

  test('does not retry when the response has no retry_after', async () => {
    const { fetch, calls } = createSequenceFetch([floodResponse()]);
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const error = await expectTelegramError(bot(getMe()));

    expect(calls).toHaveLength(1);
    expect(error.code).toBe(429);
  });

  test('does not retry a failed fetch', async () => {
    const { fetch, calls } = createFetch(() =>
      Promise.reject(new Error('network down'))
    );
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    await expectTelegramError(bot(getMe()));

    expect(calls).toHaveLength(1);
  });

  test('gives up after maxRetryCount and reports the last error', async () => {
    const { fetch, calls } = createSequenceFetch([
      floodResponse(1),
      floodResponse(1),
      floodResponse(1),
      floodResponse(1),
    ]);
    const bot = createTelegramBot({ apiKey: 'key', fetch });

    const promise = expectTelegramError(bot(getMe()));
    await vi.advanceTimersByTimeAsync(3000);
    const error = await promise;

    expect(calls).toHaveLength(4);
    expect(error.code).toBe(429);
    expect(error.httpStatus).toBe(429);
    expect(error.description).toBe('Too Many Requests: retry later');
  });

  test('honours a custom maxRetryCount', async () => {
    const { fetch, calls } = createSequenceFetch([
      floodResponse(1),
      floodResponse(1),
    ]);
    const bot = createTelegramBot({ apiKey: 'key', fetch, maxRetryCount: 1 });

    const promise = expectTelegramError(bot(getMe()));
    await vi.advanceTimersByTimeAsync(1000);
    await promise;

    expect(calls).toHaveLength(2);
  });

  test('does not retry at all when maxRetryCount is zero', async () => {
    const { fetch, calls } = createSequenceFetch([floodResponse(1)]);
    const bot = createTelegramBot({ apiKey: 'key', fetch, maxRetryCount: 0 });

    await expectTelegramError(bot(getMe()));

    expect(calls).toHaveLength(1);
  });
});

const botKey = getBotKey();

test.runIf(botKey !== undefined)('getChat', async () => {
  if (botKey === undefined) {
    throw new Error('Cannot happen');
  }

  const bot = createTelegramBot({ apiKey: botKey });

  const result = await bot(getChat({ chat_id: '@durov' }));
  expect(result.id).toBe(-1_001_006_503_122);
});
