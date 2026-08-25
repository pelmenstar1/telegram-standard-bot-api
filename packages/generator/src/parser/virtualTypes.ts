import { NamedType, ValueTypeKind } from '../types';
import { ParserMeta } from './meta';

export const CURRENCY_TYPE_NAME = 'Currency';

// Telegram Stars are not an ISO 4217 currency, so currencies.json does not
// list them, while the API accepts them everywhere a currency is expected.
const TELEGRAM_STARS_CODE = 'XTR';

const CURRENCY_DESCRIPTION = `Three-letter ISO 4217 currency code, see <a href="/bots/payments#supported-currencies">more on currencies</a>. “${TELEGRAM_STARS_CODE}” stands for payments in Telegram Stars.`;

export function parseVirtualTypes({ currencies }: ParserMeta): NamedType[] {
  return [
    {
      name: CURRENCY_TYPE_NAME,
      description: CURRENCY_DESCRIPTION,
      underlyingType: {
        kind: ValueTypeKind.UNION,
        types: [...currencies, TELEGRAM_STARS_CODE].map((value) => ({
          kind: ValueTypeKind.LITERAL,
          value,
        })),
      },
    },
  ];
}
