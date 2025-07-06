export type PayloadTransformer = (value: Record<string, unknown>) => BodyInit;

export const jsonPayloadTransformer: PayloadTransformer = JSON.stringify;

export const formDataPayloadTransformer: PayloadTransformer = (value) => {
  const result = new FormData();

  for (const key in value) {
    const propertyValue = value[key];

    if (propertyValue instanceof Blob) {
      result.append(key, propertyValue);
    } else {
      result.set(key, String(propertyValue));
    }
  }

  return result;
};
