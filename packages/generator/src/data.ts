import fsp from 'node:fs/promises';
import path from 'node:path';

export type TelegramData = {
  api: string;
  currency: string;
};

type Mode = 'local' | 'remote';

const dataDir = path.join(import.meta.dirname, '../data');
const localApiPath = path.join(dataDir, 'api.html');
const localCurrencyPath = path.join(dataDir, 'currency.json');

async function readFileOrUndefined(filePath: string) {
  try {
    return await fsp.readFile(filePath, 'utf8');
  } catch {
    return undefined;
  }
}

async function fetchPageContent(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

  if (response.ok) {
    return await response.text();
  }

  throw new Error(`Cannot fetch the page: ${response.statusText}`);
}

export async function getTelegramData(
  mode: Mode = 'local'
): Promise<TelegramData> {
  let api: string | undefined;
  let currency: string | undefined;

  if (mode === 'local') {
    [api, currency] = await Promise.all([
      readFileOrUndefined(localApiPath),
      readFileOrUndefined(localCurrencyPath),
    ]);
  }

  if (api === undefined) {
    api = await fetchPageContent('https://core.telegram.org/bots/api');
    await fsp.writeFile(localApiPath, api, 'utf8');
  }

  if (currency === undefined) {
    currency = await fetchPageContent(
      'https://core.telegram.org/bots/payments/currencies.json'
    );

    await fsp.writeFile(localCurrencyPath, currency, 'utf8');
  }

  return { api, currency };
}
