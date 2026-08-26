export function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export function getApiRequestUrl(
  apiUrl: string | URL | undefined,
  apiKey: string,
  methodName: string
) {
  if (apiUrl === undefined) {
    apiUrl = 'https://api.telegram.org/';
  }

  apiUrl = new URL(apiUrl);
  let { pathname } = apiUrl;
  if (!pathname.endsWith('/')) {
    pathname += '/';
  }

  pathname += `bot${apiKey}/${methodName}`;
  apiUrl.pathname = pathname;

  return apiUrl.toString();
}
