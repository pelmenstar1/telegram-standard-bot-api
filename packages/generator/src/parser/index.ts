import { FullParseResult } from '../types';
import { parseCurrencyData } from './currency';
import { ParserMeta } from './meta';
import { parseMethods } from './methods';
import { parseNamedTypes } from './namedTypes';
import { parseVirtualTypes } from './virtualTypes';

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

  // The virtual ones come first, as the page never declares them and they are
  // what the declared types are built out of.
  const types = [
    ...parseVirtualTypes(meta),
    ...parseNamedTypes(devPageContent),
  ];
  const methods = parseMethods(devPageContent);

  return { types, methods };
}
