import { emitParsedResult } from './emit';
import { fetchTelegramBotApiPage } from './fetch';
import { parseApiPage } from './parser';

async function main() {
  const apiPage = await fetchTelegramBotApiPage();

  const parseResult = parseApiPage(apiPage);

  await emitParsedResult(parseResult);
}

void main();
