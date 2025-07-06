import { load } from 'cheerio';

import { FullParseResult } from '../types';
import { parseMethods } from './methods';
import { parseNamedTypes } from './namedTypes';

export function parseApiPage(content: string): FullParseResult {
  const document = load(content);
  const devPageContent = document('div#dev_page_content').html();
  if (devPageContent === null) {
    throw new Error('Invalid page');
  }

  const types = parseNamedTypes(devPageContent);
  const methods = parseMethods(devPageContent);

  return { types, methods };
}
