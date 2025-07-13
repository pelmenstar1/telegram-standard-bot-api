import {
  execFile,
  ExecFileOptionsWithStringEncoding,
} from 'node:child_process';

export function execFileAsync(
  file: string,
  args: string[],
  options: ExecFileOptionsWithStringEncoding
): Promise<string> {
  return new Promise((resolve, reject) => {
    execFile(file, args, options, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`${stdout}\n${stderr}`, { cause: error }));
      }

      resolve(stdout);
    });
  });
}
