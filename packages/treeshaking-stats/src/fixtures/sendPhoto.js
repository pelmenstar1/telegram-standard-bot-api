import { sendPhoto, bot } from 'telegram-standard-bot-api';

await bot(sendPhoto({ chat_id: 123, photo: 'https://example.com/photo.jpg' }));
