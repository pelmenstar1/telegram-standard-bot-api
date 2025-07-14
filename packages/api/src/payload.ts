export type PayloadTransformer = (value: Record<string, unknown>) => BodyInit;

export const jsonPayloadTransformer: PayloadTransformer = JSON.stringify;

export const formDataPayloadTransformer: PayloadTransformer = (value) => {
  const result = new FormData();

  for (const key in value) {
    const propertyValue = value[key];

    if (propertyValue !== undefined && propertyValue !== null) {
      if (propertyValue instanceof Blob) {
        result.append(key, propertyValue);
      } else if (propertyValue instanceof Uint8Array) {
        result.append(key, new Blob([propertyValue]));
      } else if (typeof propertyValue === 'object') {
        result.set(key, JSON.stringify(propertyValue));
      } else {
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        result.set(key, propertyValue.toString());
      }
    }
  }

  return result;
};
