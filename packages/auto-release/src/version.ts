export function bumpMajorVersion(version: string): string {
  const [major, minor, patch] = version.split('.', 3);

  const majorNumber = Number.parseInt(major);
  if (Number.isNaN(majorNumber)) {
    throw new TypeError('Invalid version');
  }

  const newMajor = majorNumber + 1;

  return `${newMajor}.${minor}.${patch}`;
}
