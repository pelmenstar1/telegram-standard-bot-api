async function fetchPageContent(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

  if (response.ok) {
    return await response.text();
  }

  throw new Error(`Cannot fetch the page: ${response.statusText}`);
}

export async function fetchTelegramBotApiPage(): Promise<string> {
  return fetchPageContent('https://core.telegram.org/bots/api');
}

export async function fetchCurrenciesData(): Promise<string> {
  return fetchPageContent(
    'https://core.telegram.org/bots/payments/currencies.json'
  );
}
