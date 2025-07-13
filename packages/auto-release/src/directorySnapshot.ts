import fsp from 'node:fs/promises';
import path from 'node:path';

type DirectorySnapshot = {
  files: Record<string, Buffer | undefined>;
};

export async function takeDirectorySnapshot(
  dirPath: string
): Promise<DirectorySnapshot> {
  async function worker(dirPath: string): Promise<[string, Buffer][]> {
    const entries = await fsp.readdir(dirPath, {
      withFileTypes: true,
    });

    const result: [string, Buffer][] = [];

    for (const entry of entries) {
      const entryPath = path.join(dirPath, entry.name);
      if (entry.isFile()) {
        const content = await fsp.readFile(entryPath, { encoding: null });

        result.push([entryPath, content]);
      } else {
        result.push(...(await worker(entryPath)));
      }
    }

    return result;
  }

  const files = Object.fromEntries(await worker(dirPath));

  return { files };
}

export function compareDirectorySnapshots(
  oldSnapshot: DirectorySnapshot,
  newSnapshot: DirectorySnapshot
): boolean {
  for (const filePath in oldSnapshot.files) {
    const oldBuffer = oldSnapshot.files[filePath];
    const newBuffer = newSnapshot.files[filePath];

    if (oldBuffer === undefined || newBuffer === undefined) {
      return false;
    }

    if (!oldBuffer.equals(newBuffer)) {
      return false;
    }
  }

  return true;
}
