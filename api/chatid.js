// Одноразова сторінка: показує ваш chat id, щоб вписати його у Vercel. Після налаштування вимикається сама.
module.exports = async function (req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  if (process.env.TELEGRAM_CHAT_ID) return res.status(403).send('Вже налаштовано. Цю сторінку можна видалити.');
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return res.status(500).send('У налаштуваннях Vercel немає TELEGRAM_BOT_TOKEN.');
  const r = await fetch('https://api.telegram.org/bot' + token + '/getUpdates').then(x => x.json()).catch(() => null);
  const chats = {};
  ((r && r.result) || []).forEach(u => { const c = u.message && u.message.chat; if (c) chats[c.id] = [c.first_name, c.username].filter(Boolean).join(' '); });
  const ids = Object.keys(chats);
  if (!ids.length) return res.status(200).send('Спочатку напишіть вашому боту в Telegram будь-яке повідомлення (наприклад, /start), потім оновіть цю сторінку.');
  res.status(200).send('<h2>Ваш chat id:</h2>' + ids.map(i => '<p style="font-size:28px"><b>' + i + '</b> <small>(' + chats[i] + ')</small></p>').join('') + '<p>Скопіюйте число і вставте у Vercel як TELEGRAM_CHAT_ID.</p>');
};
