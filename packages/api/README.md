# Telegram standard bot API

Simple API and typings for the Telegram Bot API. Zero dependencies, only standard web APIs.

Types and methods are generated from **Telegram Bot API 10.3**.

## Installation

```sh
npm install telegram-standard-bot-api
```

The library relies on `fetch` (which can be substituted), `FormData` and `Blob` (when using files) being globally available, so it requires Node.js 18 or later, or any modern runtime (Cloudflare Workers, Deno, Bun, browsers).

## Usage

A bot instance is a function that can execute commands (methods).

You can either create your own bot instance:

```ts
import { createTelegramBot } from 'telegram-standard-bot-api';

const bot = createTelegramBot({ apiKey: '123' });
```

or use a global one:

```ts
import { bot } from 'telegram-standard-bot-api';

bot.setApiKey('123');
```

The global `bot` is a single instance shared by every module that imports it. Calling `setApiKey` changes the key for the whole process, and calling the bot before the key is set throws. Prefer `createTelegramBot` when you need more than one bot, when tests run in parallel, or when the key is not known at startup.

If you don't want to use global `fetch`, you can use a different one:

```ts
import { createTelegramBot } from 'telegram-standard-bot-api';

const bot = createTelegramBot({
  apiKey: '123',
  fetch: someOtherFetch,
});
```

By default requests go to `https://api.telegram.org`. Pass `apiUrl` to talk to a [local Bot API server](https://core.telegram.org/bots/api#using-a-local-bot-api-server):

```ts
import { createTelegramBot } from 'telegram-standard-bot-api';

const bot = createTelegramBot({
  apiKey: '123',
  apiUrl: 'http://localhost:8081',
});

// It will send a HTTP request to 'http://localhost:8081/bot123/getMe'
await bot(getMe());
```

To execute a command, invoke a bot instance:

```ts
import { bot, sendMessage } from 'telegram-standard-bot-api';

const message = await bot(sendMessage({ chat_id: 123, text: 'Hello' }));

console.log(message.message_id);
```

Every method has a payload type named after it, with the first letter capitalized: `sendMessage` takes a `SendMessage`, `getUpdates` takes a `GetUpdates`.

```ts
import { bot, sendMessage, type SendMessage } from 'telegram-standard-bot-api';

const payload: SendMessage = { chat_id: 123, text: 'Hello' };

await bot(sendMessage(payload));
```

## Sending files

Methods that accept a file take `InputFile | string`. A string is passed through to Telegram as a `file_id` or an HTTP URL, and an `InputFile` (`Blob` or `Uint8Array`) is uploaded as `multipart/form-data`:

```ts
import { bot, sendPhoto } from 'telegram-standard-bot-api';

await bot(
  sendPhoto({
    chat_id: 123,
    photo: new Blob([bytes], { type: 'image/png' }),
    caption: 'A photo',
  })
);
```

## Retries

When Telegram answers with a `retry_after` parameter, which happens when a bot hits flood control, the request is repeated after the requested delay. By default a request may be retried 3 times before the error is thrown:

```ts
import { createTelegramBot } from 'telegram-standard-bot-api';

const bot = createTelegramBot({
  apiKey: '123',
  maxRetryCount: 5, // pass 0 to disable retrying
});
```

Only `retry_after` responses are retried. Every other failure, including network errors, is thrown immediately.

## Errors

A failed call throws an error carrying whatever the API reported:

```ts
try {
  await bot(sendMessage({ chat_id: 123, text: 'Hello' }));
} catch (error) {
  console.log(error.code); // Telegram error code, for example 400
  console.log(error.httpStatus); // HTTP status of the response
  console.log(error.description); // Description returned by the API
}
```

Each property is `undefined` when the failure happened before a response was parsed. In that case the original failure is available as `error.cause`.

## Methods are plain data

A method does not send anything and does not know how to. Calling one returns a `BotMethodInfo`: the name of the API method, and an optional initializer that fills in the request:

```ts
import { sendMessage } from 'telegram-standard-bot-api';

const info = sendMessage({ chat_id: 123, text: 'Hello' });

info.name; // 'sendMessage'
info.initializer; // (init: RequestInit) => void
```

The initializer mutates a `RequestInit` in place. Anything able to make an HTTP request can execute a method:

```ts
import { sendMessage, BotMethodInfo } from 'telegram-standard-bot-api';

async function execute<R>({ name, initializer }: BotMethodInfo<R>): Promise<R> {
  const init: RequestInit = { method: 'POST' };
  initializer?.(init);

  const response = await myHttpClient(
    `https://api.telegram.org/bot${apiKey}/${name}`,
    init
  );
  const data = await response.json();

  return data.result;
}

await execute(sendMessage({ chat_id: 123, text: 'Hello' }));
```

Use this to plug the methods into your own client when you need behavior that `createTelegramBot` does not offer. Note that the response shape, error handling and retries then become your responsibility.

## Rationale

The library is specifically built for environments where the size of your server code matters, for example, Cloudflare Workers. Hence, it is designed to be fully trimmable - only code that you actually use is in the bundle. That's why `bot(sendMessage())`, and not `bot.sendMessage()`, because class methods are hard to trim.

This library just does one thing: it makes a request to the Telegram Bot API in a typed manner. It deliberately provides no polling loop, no webhook server and no session or scene handling.

## License

[MIT](https://opensource.org/licenses/MIT)
