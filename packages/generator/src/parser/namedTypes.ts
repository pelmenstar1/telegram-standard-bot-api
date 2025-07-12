import { load } from 'cheerio';

import { NamedType, ValueType } from '../types';
import { isCapitalized } from '../utils/string';
import { parseTypeTableToFields } from './fields';
import { sliceSection, splitByHeader } from './misc';

const exceptions = new Set([
  'Sending files',
  'Accent colors',
  'Profile accent colors',
]);

const sections = [
  ['getting-updates', 'available-types'],
  ['available-types', 'available-methods'],
  ['stickers', 'inline-mode'],
  ['inline-mode', 'payments'],
  ['payments', 'telegram-passport'],
  ['telegram-passport', 'games'],
  ['games', undefined],
] as const;

export function parseNamedTypes(content: string): NamedType[] {
  return sections.flatMap(([startName, endName]) => {
    const section = sliceSection(content, startName, endName);
    const parts = splitByHeader(section);

    return [...parseObjectNamedTypes(parts), ...parseUnionNamedTypes(parts)];
  });
}

function isNamedUnionType(content: string): boolean {
  return (
    content.includes('<ul>') &&
    !content.includes('ForceReply') &&
    !content.includes('Determining list of commands')
  );
}

function parseObjectNamedTypes(parts: string[]): NamedType[] {
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

  // eslint-disable-next-line unicorn/consistent-function-scoping
  function findEmptyObjectGroups(content: string) {
    const match = content.match(/<\/a>(.+)<\/h4>/m);

    if (match !== null) {
      return { name: match[1] };
    }

    return null;
  }

  const types: NamedType[] = [];

  for (const part of parts) {
    if (isNamedUnionType(part)) {
      continue;
    }

    if (part.includes('InputFile') || part.includes('Inline mode objects')) {
      continue;
    }

    if (part.toLowerCase().includes('currently holds no information')) {
      const groups = findEmptyObjectGroups(part);
      if (groups !== null) {
        types.push({
          name: groups.name,
          description: '',
          underlyingType: { type: 'object', fields: [] },
        });
      }
    }

    const groups = findInitialGroups(part);
    if (groups === null) {
      continue;
    }

    const { name, description, table } = groups;

    if (!isCapitalized(name) || exceptions.has(name)) {
      continue;
    }

    const plainDescription = load(description).text();
    const fields = parseTypeTableToFields(table);

    types.push({
      name,
      description: plainDescription,
      underlyingType: {
        type: 'object',
        fields,
      },
    });
  }

  return types;
}

function parseUnionNamedTypes(parts: string[]): NamedType[] {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function findInitialGroups(content: string) {
    const match = content.match(
      /<\/a>(?<name>.*?)<\/h4>(?:.|\n)*?<ul>(?<list>(?:.|\n)*?)<\/ul>/m
    );

    if (match) {
      const { groups } = match;

      const name = groups?.name;
      const list = groups?.list;

      return {
        name: name as string,
        list: list as string,
      };
    }

    throw new Error('Invalid part');
  }

  // eslint-disable-next-line unicorn/consistent-function-scoping
  function parseListToUnionTypes(content: string) {
    const result: ValueType[] = [];

    const matches = content.matchAll(/<a.*?>(.*?)<\/a>/gm);

    for (const match of matches) {
      const refName = match[1];

      result.push({ type: 'ref', name: refName });
    }

    return result;
  }

  const result: NamedType[] = [];

  for (const part of parts) {
    if (!isNamedUnionType(part)) {
      continue;
    }

    const { name, list } = findInitialGroups(part);

    if (!isCapitalized(name) || exceptions.has(name)) {
      continue;
    }

    const types = parseListToUnionTypes(list);

    result.push({
      name,
      description: '',
      underlyingType: {
        type: 'union',
        types,
      },
    });
  }

  return result;
}
