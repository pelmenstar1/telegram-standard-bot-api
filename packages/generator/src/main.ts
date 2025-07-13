import { emitParsedResult } from './emit';
import { fetchCurrenciesData, fetchTelegramBotApiPage } from './fetch';
import { parseApiPage } from './parser';

async function main() {
  console.log('Fething Telegram data...');
  const [apiPage, currencyData] = await Promise.all([
    fetchTelegramBotApiPage(),
    fetchCurrenciesData(),
  ]);

  console.log('Parsing...');
  const parseResult = parseApiPage({ api: apiPage, currency: currencyData });

  console.log('Emitting...');
  await emitParsedResult(parseResult);
}

void main();
