export function bumpMinor(version: string): string {
  const [major, minor] = version.split('.', 3);

  const minorNumber = Number.parseInt(minor);
  if (Number.isNaN(minorNumber)) {
    throw new TypeError('Invalid version');
  }

  const newMinor = minorNumber + 1;

  return `${major}.${newMinor}.0`;
}
