import { object, record, string } from 'zod';

const currencyDataSchema = record(
  string(),
  object({
    code: string(),
  })
);

export function parseCurrencyData(text: string): string[] {
  const rawData = JSON.parse(text);
  const data = currencyDataSchema.parse(rawData);

  return Object.values(data).map(({ code }) => code);
}
