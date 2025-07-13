# Telegram standard bot API

Simple API and typings for the Telegram bot API. Zero dependencies, only standard web APIs

# Usage

A bot instance is a function that can execute commands (methods)

You can either create your own bot instance:

```ts
import { createTelegramBot } from 'telegram-standard-bot-api';

const bot = createTelegramBot({ apiKey: '123' });
```

or use a global one

```ts
import { bot } from 'telegram-standard-bot-api';
```

If you don't want to use global `fetch`, you can use a different one:

```ts
import { createTelegramBot } from 'telegram-standard-bot-api';

const bot = createTelegramBot({ 
  apiKey: '123', 
  fetch: someOtherFetch
});
```

To execute a command, invoke a bot instance:

```ts
import { bot } from 'telegram-standard-bot-api';
import { sendMessage } from 'telegram-standard-bot-api/methods';

await bot(sendMessage({ ... }))
```

# Types

All bot API types are located at `telegram-standard-bot-api/types`

# Rationale

The library is specifically created for environments where the size of your server code matters, for example, Cloudflare Workers. Hence, it is designed to be fully-trimmable - only code that you actually use is in the bundle. That's why `bot(sendMessage())`, and not `bot.sendMessage()`, because class methods are hard to trim.

This library just does one thing: it makes a request to the Telegram bot API in a typed manner.
