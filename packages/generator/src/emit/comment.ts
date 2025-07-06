import { DefaultTreeAdapterTypes, parseFragment } from 'parse5';

import { ind } from './indent';

type CommentOptions =
  | {
      indent?: number;
    }
  | {
      indent?: number;
      typeName: string;
      fieldNames: string[];
    };

function normalizeSpaces(text: string): string {
  text = text.replaceAll(/\s+/g, ' ');
  text = text.replaceAll(/\s+,/g, ',');
  text = text.replaceAll(/\s+\./g, '.');

  return text;
}

function htmlNodesToDocString(nodes: DefaultTreeAdapterTypes.Node[]): string {
  return nodes.map((child) => htmlNodeToDocString(child)).join(' ');
}

function htmlNodeToDocString(node: DefaultTreeAdapterTypes.Node): string {
  switch (node.nodeName) {
    case '#text': {
      return (node as DefaultTreeAdapterTypes.TextNode).value;
    }
    case 'a': {
      const href = node.attrs.find(({ name }) => name === 'href')?.value;
      const content = htmlNodesToDocString(node.childNodes);

      if (href !== undefined && href.startsWith('/')) {
        return `{@link https://core.telegram.org${href} | ${content}}`;
      }

      return content;
    }
    default: {
      if ('childNodes' in node) {
        return htmlNodesToDocString(node.childNodes);
      }

      return '';
    }
  }
}

function htmlToDocString(value: string): string {
  const fragment = parseFragment(value);

  return normalizeSpaces(htmlNodeToDocString(fragment));
}

function replaceFieldMentionsToLinks(
  value: string,
  typeName: string,
  fieldNames: string[]
): string {
  const WHITESPACES = new Set([',', '.', ' ', ';', ':']);

  function worker(text: string, fieldName: string): string {
    let offset = 0;
    while (offset < text.length) {
      const nextOffset = value.indexOf(fieldName, offset);
      if (nextOffset === -1) {
        break;
      }

      if (
        WHITESPACES.has(text[nextOffset - 1]) &&
        WHITESPACES.has(text[nextOffset + fieldName.length])
      ) {
        const prefix = text.slice(0, nextOffset);
        const suffix = text.slice(nextOffset + fieldName.length);
        const replacement = `{@link ${typeName}.${fieldName} | ${fieldName}}`;

        text = `${prefix}${replacement}${suffix}`;

        offset = nextOffset + replacement.length + 1;
      } else {
        offset = nextOffset + 1;
      }
    }

    return text;
  }

  for (const name of fieldNames) {
    value = worker(value, name);
  }

  return value;
}

function removeUnnecessaryParts(value: string) {
  const parts = ['Optional .', 'Optional.'];

  for (const part of parts) {
    if (value.startsWith(part)) {
      value = value.slice(part.length);
    }
  }

  return value;
}

export function textToTsDocComment(
  value: string,
  options?: CommentOptions
): string {
  const indent = options?.indent ?? 0;

  if (value.length === 0) {
    return '';
  }

  let docString = htmlToDocString(value);
  docString = removeUnnecessaryParts(docString);

  if (options && 'typeName' in options) {
    docString = replaceFieldMentionsToLinks(
      docString,
      options.typeName,
      options.fieldNames
    );
  }

  const content = docString
    .split('\n')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => `${ind(indent + 1)}* ${part}`)
    .join('\n');

  return `/**\n${content}\n${ind(indent + 1)}*/`;
}
