import { describe, expect, test } from 'vitest';

import { getApiRequestUrl } from '../utils.js';

const apiKey = '123456:ABC-DEF';

describe('getApiRequestUrl', () => {
  test.each([
    [undefined, 'getMe', `https://api.telegram.org/bot${apiKey}/getMe`],
    [
      undefined,
      'sendMessage',
      `https://api.telegram.org/bot${apiKey}/sendMessage`,
    ],
    ['https://example.com', 'getMe', `https://example.com/bot${apiKey}/getMe`],
    ['https://example.com/', 'getMe', `https://example.com/bot${apiKey}/getMe`],
    [
      'https://example.com/prefix',
      'getMe',
      `https://example.com/prefix/bot${apiKey}/getMe`,
    ],
    [
      'https://example.com/prefix/',
      'getMe',
      `https://example.com/prefix/bot${apiKey}/getMe`,
    ],
    [
      'http://localhost:8081/',
      'getMe',
      `http://localhost:8081/bot${apiKey}/getMe`,
    ],
    [
      'https://example.com/?a=1#frag',
      'getMe',
      `https://example.com/bot${apiKey}/getMe?a=1#frag`,
    ],
    [
      new URL('https://example.com/base/'),
      'getMe',
      `https://example.com/base/bot${apiKey}/getMe`,
    ],
  ])('(%s, %s) -> %s', (apiUrl, methodName, expected) => {
    expect(getApiRequestUrl(apiUrl, apiKey, methodName)).toBe(expected);
  });

  test('does not mutate the given URL instance', () => {
    const apiUrl = new URL('https://example.com/base/');
    getApiRequestUrl(apiUrl, apiKey, 'getMe');

    expect(apiUrl.toString()).toBe('https://example.com/base/');
  });
});
