export async function fetchTelegramBotApiPage(): Promise<string> {
  const response = await fetch('https://core.telegram.org/bots/api', {
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

  if (response.ok) {
    return await response.text();
  }

  throw new Error(`Cannot fetch the API page: ${response.statusText}`);
}
