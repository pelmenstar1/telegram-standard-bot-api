export function splitByHeader(content: string): string[] {
  let offset = 0;
  const parts: string[] = [];

  while (offset < content.length) {
    const nextOffset = content.indexOf('<h4>', offset);

    if (nextOffset === -1) {
      parts.push(content.slice(offset));
      break;
    } else {
      if (offset > 0) {
        parts.push(content.slice(offset, nextOffset));
      }

      offset = nextOffset + '<h4>'.length;
    }
  }

  return parts;
}

export function sliceSection(
  content: string,
  startName: string,
  endName?: string
): string {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function tag(name: string): string {
    return `<a class="anchor" name="${name}" href="#${name}">`;
  }

  const startIndex = content.indexOf(tag(startName));
  if (startIndex === -1) {
    throwInvalidContent();
  }

  if (endName === undefined) {
    return content.slice(startIndex);
  }

  const endIndex = content.indexOf(tag(endName), startIndex);
  if (endIndex === -1) {
    throwInvalidContent();
  }

  return content.slice(startIndex, endIndex);
}

function throwInvalidContent(): never {
  throw new Error('Invalid content');
}
