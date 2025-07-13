import { load } from 'cheerio';

import { FullParseResult } from '../types';
import { parseCurrencyData } from './currency';
import { ParserMeta } from './meta';
import { parseMethods } from './methods';
import { parseNamedTypes } from './namedTypes';

type ParserInput = {
  api: string;
  currency: string;
};

function getDevPageContent(text: string) {
  const document = load(text);
  const devPageContent = document('div#dev_page_content').html();
  if (devPageContent === null) {
    throw new Error('Invalid page');
  }

  return devPageContent;
}

export function parseApiPage(input: ParserInput): FullParseResult {
  const currencies = parseCurrencyData(input.currency);
  const devPageContent = getDevPageContent(input.api);

  const meta: ParserMeta = { currencies };

  const types = parseNamedTypes(devPageContent, meta);
  const methods = parseMethods(devPageContent, meta);

  return { types, methods };
}
