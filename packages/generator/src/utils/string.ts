export function isCapitalized(value: string): boolean {
  const first = value[0];

  return first.toUpperCase() === first;
}

export function capitalize(value: string): string {
  return value[0].toUpperCase() + value.slice(1);
}
