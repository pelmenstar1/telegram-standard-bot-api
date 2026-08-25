export type RequestInitializer = (value: RequestInit) => void;
export type RequestInitializerFactory<T = unknown> = (
  value: T
) => RequestInitializer;

function setHeader(
  init: HeadersInit | undefined,
  key: string,
  value: string
): HeadersInit {
  if (init === undefined) {
    init = { [key]: value };
  } else if (init instanceof Headers) {
    init.set(key, value);
  } else if (Array.isArray(init)) {
    init.push([key, value]);
  } else {
    init[key] = value;
  }

  return init;
}

export const jsonRequestInitializerFactory: RequestInitializerFactory = (
  value
) => {
  return (request) => {
    request.body = JSON.stringify(value);
    request.headers = setHeader(
      request.headers,
      'Content-Type',
      'application/json'
    );
  };
};

export const formDataRequestInitializerFactory: RequestInitializerFactory<
  Record<string, unknown>
> = (value) => {
  return (request) => {
    const body = new FormData();

    for (const key in value) {
      const propertyValue = value[key];

      if (propertyValue !== undefined && propertyValue !== null) {
        if (propertyValue instanceof Blob) {
          body.set(key, propertyValue);
        } else if (propertyValue instanceof Uint8Array) {
          body.set(
            key,
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            new Blob([propertyValue as Uint8Array<ArrayBuffer>], {
              type: 'application/octet-stream',
            })
          );
        } else if (typeof propertyValue === 'object') {
          body.set(key, JSON.stringify(propertyValue));
        } else if (
          typeof propertyValue === 'string' ||
          typeof propertyValue === 'number' ||
          typeof propertyValue === 'boolean' ||
          typeof propertyValue === 'bigint'
        ) {
          body.set(key, propertyValue.toString());
        }
      }
    }

    request.body = body;
  };
};
