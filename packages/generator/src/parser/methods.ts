import { ParsedMethod, ValueType, ValueTypeKind } from '../types';
import { isCapitalized } from '../utils/string';
import { parseMethodTableToFields } from './fields';
import { ParserMeta } from './meta';
import { sliceSection, splitByHeader } from './misc';
import { parseValueType } from './valueType';

const sections = [
  ['getting-updates', 'available-types'],
  ['available-methods', 'stickers'],
  ['stickers', 'inline-mode'],
  ['inline-mode', 'payments'],
  ['payments', 'telegram-passport'],
  ['telegram-passport', 'games'],
  ['games', undefined],
] as const;

function getMethodReturnType(description: string): ValueType {
  const otherwiseMatch = description.match(
    /On success, (.*?) is returned, otherwise (.*?) is returned/i
  );

  if (otherwiseMatch !== null) {
    return {
      kind: ValueTypeKind.UNION,
      types: [otherwiseMatch[1], otherwiseMatch[2]].map((value) =>
        parseValueType(value)
      ),
    };
  }

  const patterns = [
    /\.(?:<br>)? ?Returns ((?:.)*?) on success/i,
    /\.(?:<br>)? ?Returns ((?:.)*?) objects?/i,
    /\.(?:<br>)? ?On success, ((?:.)*?) is returned/i,
    /\.(?:<br>)? ?On success, returns ((?:.)*?) object/i,
  ];

  for (const pattern of patterns) {
    const match = description.match(pattern);

    if (match !== null) {
      return parseValueType(match[1]);
    }
  }

  throw new Error(`Cannot parse ${description}`);
}

export function parseMethods(
  content: string,
  meta: ParserMeta
): ParsedMethod[] {
  return sections
    .flatMap(([startName, endName]) => {
      const section = sliceSection(content, startName, endName);
      const parts = splitByHeader(section);

      return parts.map((part) => parsePart(part, meta));
    })
    .filter((method) => method !== null);
}

function parsePart(part: string, meta: ParserMeta): ParsedMethod | null {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function findInitialGroups(content: string) {
    const match = content.match(
      /<\/a>(?<name>.+)<\/h4>(?<description>(?:.|\n)*?)<table.*?>(?<table>(?:.|\n)*?)<\/table>/m
    );

    if (match) {
      const { groups } = match;

      const name = groups?.name;
      const description = groups?.description;
      const table = groups?.table;

      return {
        name: name as string,
        description: description as string,
        table: table as string,
      };
    }

    return null;
  }

  if (part.includes('Requires no parameters')) {
    const match = part.match(/<\/a>(.+)<\/h4>((?:.|\n)+)/m);

    if (match !== null) {
      const name = match[1];
      const description = match[2];

      return {
        name,
        returnType: getMethodReturnType(description),
        description,
        fields: [],
      };
    }
  }

  const groups = findInitialGroups(part);
  if (groups === null) {
    return null;
  }

  const { name, description, table } = groups;

  if (isCapitalized(name)) {
    return null;
  }

  return {
    name,
    description,
    returnType: getMethodReturnType(description),
    fields: parseMethodTableToFields(table, meta),
  };
}
