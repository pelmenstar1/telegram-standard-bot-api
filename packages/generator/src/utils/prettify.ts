import { format } from 'prettier';

export function prettify(content: string): Promise<string> {
  return format(content, {
    trailingComma: 'es5',
    singleQuote: true,
    parser: 'typescript',
  });
}
