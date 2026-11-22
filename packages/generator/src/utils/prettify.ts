import { format } from 'oxfmt';

import { FORMAT_OPTIONS } from './formatOptions';

export async function prettify(content: string): Promise<string> {
  const { code, errors } = await format(
    'generated.ts',
    content,
    FORMAT_OPTIONS
  );

  if (errors.length > 0) {
    const details = errors.map(({ message }) => message).join('\n');

    throw new Error(`Cannot format generated code:\n${details}`);
  }

  return code;
}
