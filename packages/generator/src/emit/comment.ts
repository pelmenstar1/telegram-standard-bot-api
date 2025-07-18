import { DefaultTreeAdapterTypes, parseFragment } from 'parse5';

import { EmitMeta } from './meta';

interface BaseCommentOptions {
  meta: EmitMeta;
}

interface NamedTypeCommentOptions extends BaseCommentOptions {
  typeName: string;
  fieldNames: string[];
}

type CommentOptions = BaseCommentOptions | NamedTypeCommentOptions;

function normalizeSpaces(text: string): string {
  text = text.replaceAll(/\s+/g, ' ');
  text = text.replaceAll(/\s+,/g, ',');
  text = text.replaceAll(/\s+\./g, '.');

  return text;
}

function link(href: string, title?: string): string {
  let result = `{@link ${href}`;
  if (title !== undefined && title.length > 0) {
    result += ` | ${title}`;
  }

  return `${result}}`;
}

function htmlNodesToDocString(nodes: DefaultTreeAdapterTypes.Node[]): string {
  return nodes.map((child) => htmlNodeToDocString(child)).join('');
}

function htmlNodeToDocString(node: DefaultTreeAdapterTypes.Node): string {
  switch (node.nodeName) {
    case '#text': {
      return (node as DefaultTreeAdapterTypes.TextNode).value;
    }
    case 'a': {
      const href = node.attrs.find(({ name }) => name === 'href')?.value;
      const content = htmlNodesToDocString(node.childNodes);

      if (href !== undefined) {
        if (href.startsWith('https://core.telegram.org/stickers')) {
          return '';
        }

        if (href.startsWith('/')) {
          return link(`https://core.telegram.org${href}`, content);
        }
      }

      return content;
    }
    case 'img': {
      const alt = node.attrs.find(({ name }) => name === 'alt')?.value;

      return alt ?? '';
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

function replaceMentions(
  text: string,
  values: string[],
  getReplacement: (value: string) => string
): string {
  const WHITESPACES = new Set([',', '.', ' ', ';', ':']);

  function worker(text: string, value: string): string {
    let offset = 0;
    while (offset < text.length) {
      const nextOffset = text.indexOf(value, offset);
      if (nextOffset === -1) {
        break;
      }

      if (
        WHITESPACES.has(text[nextOffset - 1]) &&
        WHITESPACES.has(text[nextOffset + value.length])
      ) {
        const prefix = text.slice(0, nextOffset);
        const suffix = text.slice(nextOffset + value.length);
        const replacement = getReplacement(value);

        text = `${prefix}${replacement}${suffix}`;

        offset = nextOffset + replacement.length + 1;
      } else {
        offset = nextOffset + 1;
      }
    }

    return text;
  }

  for (const value of values) {
    text = worker(text, value);
  }

  return text;
}

function replaceFieldMentionsToLinks(
  value: string,
  typeName: string,
  fieldNames: string[]
): string {
  return replaceMentions(value, fieldNames, (fieldName) =>
    link(`${typeName}.${fieldName}`, fieldName)
  );
}

function replaceTypeMentionsToLinks(value: string, namedTypes: string[]) {
  return replaceMentions(value, namedTypes, (typeName) => link(typeName));
}

function removeUnnecessaryParts(value: string) {
  const parts = ['Optional .', 'Optional.'];

  for (const part of parts) {
    if (value.startsWith(part)) {
      value = value.slice(part.length);
      break;
    }
  }

  return value;
}

export function textToTsDocComment(
  value: string,
  options: CommentOptions
): string {
  if (value.length === 0) {
    return '';
  }

  let docString = htmlToDocString(value);
  docString = removeUnnecessaryParts(docString);
  docString = replaceTypeMentionsToLinks(docString, options.meta.namedTypes);

  if ('typeName' in options) {
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
    .map((part) => `* ${part}`)
    .join('\n');

  return `/**\n${content}\n*/`;
}
