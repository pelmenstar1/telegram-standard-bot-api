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
  const DIV_PREFIX = '<div id="dev_page_content"';
  const DIV_SUFFIX = '<div class="footer_wrap">';

  const startIndex = text.indexOf(DIV_PREFIX);
  const endIndex = text.lastIndexOf(DIV_SUFFIX);

  if (startIndex !== -1) {
    return text.slice(startIndex + DIV_PREFIX.length, endIndex);
  }

  throw new Error('Invalid page');
}

export function parseApiPage(input: ParserInput): FullParseResult {
  const currencies = parseCurrencyData(input.currency);
  const devPageContent = getDevPageContent(input.api);

  const meta: ParserMeta = { currencies };

  const types = parseNamedTypes(devPageContent, meta);
  const methods = parseMethods(devPageContent, meta);

  return { types, methods };
}
