import { emitParsedResult } from './emit';
import { fetchCurrenciesData, fetchTelegramBotApiPage } from './fetch';
import { parseApiPage } from './parser';

async function main() {
  const [apiPage, currencyData] = await Promise.all([
    fetchTelegramBotApiPage(),
    fetchCurrenciesData(),
  ]);

  const parseResult = parseApiPage({ api: apiPage, currency: currencyData });

  await emitParsedResult(parseResult);
}

void main();
