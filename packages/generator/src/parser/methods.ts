import methods from '../../data/methods.json';
import { ParsedMethod, ValueType } from '../types';
import { isCapitalized } from '../utils/string';
import { parseMethodTableToFields } from './fields';
import { sliceSection, splitByHeader } from './misc';
import { parseMethodDataToType } from './valueType';

const sections = [
  ['getting-updates', 'available-types'],
  ['available-methods', 'stickers'],
  ['stickers', 'inline-mode'],
  ['inline-mode', 'payments'],
  ['payments', 'telegram-passport'],
  ['telegram-passport', 'games'],
  ['games', undefined],
] as const;

function getMethodReturnType(name: string): ValueType {
  return parseMethodDataToType(methods[name as keyof typeof methods]);
}

export function parseMethods(content: string): ParsedMethod[] {
  return sections
    .flatMap(([startName, endName]) => {
      const section = sliceSection(content, startName, endName);
      const parts = splitByHeader(section);

      return parts.map((part) => parsePart(part));
    })
    .filter((method) => method !== null);
}

export function parsePart(part: string): ParsedMethod | null {
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
    const match = part.match(/<\/a>(.+)<\/h4>/m);

    if (match !== null) {
      const name = match[1];

      return {
        name,
        returnType: getMethodReturnType(name),
        description: '',
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
    returnType: getMethodReturnType(name),
    fields: parseMethodTableToFields(table),
  };
}
