import { getTelegramData } from './data';
import { emitParsedResult } from './emit';
import { parseApiPage } from './parser';

async function main() {
  const mode = process.argv[2] === '--remote' ? 'remote' : 'local';

  console.log('Fething Telegram data...');
  const data = await getTelegramData(mode);

  console.log('Parsing...');
  const parseResult = parseApiPage(data);

  console.log('Emitting...');
  await emitParsedResult(parseResult);
}

void main();
