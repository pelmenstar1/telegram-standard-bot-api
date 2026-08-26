export interface TelegramErrorOptions extends ErrorOptions {
  code?: number | undefined;
  httpStatus?: number | undefined;
  description?: string | undefined;
}

export class TelegramError extends Error {
  code: number | undefined;
  httpStatus: number | undefined;
  description: string | undefined;

  constructor(message?: string, options?: TelegramErrorOptions) {
    super(message, options);

    if (options) {
      this.code = options.code;
      this.httpStatus = options.httpStatus;
      this.description = options.description;
    }
  }
}
