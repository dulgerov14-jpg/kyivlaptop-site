// Приймає замовлення з сайту й надсилає повідомлення в Telegram власнику.
// Потрібні змінні середовища Vercel: TELEGRAM_BOT_TOKEN і TELEGRAM_CHAT_ID (кілька отримувачів через кому).
const esc = s => String(s == null ? '' : s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const cut = (s, n) => String(s == null ? '' : s).trim().slice(0, n);

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method' });
  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};
  if (b.website) return res.status(200).json({ ok: true }); // пастка для ботів

  const name = cut(b.name, 60), surname = cut(b.surname, 60), phone = cut(b.phone, 30);
  const np = cut(b.np, 160), note = cut(b.note, 300), product = cut(b.product, 120);
  const delivery = b.delivery === 'pickup' ? 'pickup' : 'np';
  if (name.length < 2 || phone.replace(/\D/g, '').length < 9 || (delivery === 'np' && np.length < 3)) {
    return res.status(400).json({ ok: false, error: 'invalid' });
  }
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const ids = String(process.env.TELEGRAM_CHAT_ID || '').split(',').map(s => s.trim()).filter(Boolean);
  if (!token || !ids.length) return res.status(500).json({ ok: false, error: 'not_configured' });

  const price = Number(b.price) > 0 ? Number(b.price).toLocaleString('ru-RU') + ' грн' : 'цена по запросу';
  const code = String(Number(b.id) || '').padStart(3, '0');
  const text = [
    '🛒 <b>Новый заказ с сайта</b>',
    'Товар: <b>' + esc(product) + ' #' + esc(code) + '</b>',
    'Цена: ' + esc(price),
    'Имя: ' + esc(name + ' ' + surname),
    'Телефон: ' + esc(phone),
    'Доставка: ' + (delivery === 'pickup' ? 'Самовывоз (Киев)' : 'Нова Пошта — ' + esc(np)),
    note ? 'Комментарий: ' + esc(note) : ''
  ].filter(Boolean).join('\n');

  const sent = await Promise.all(ids.map(id =>
    fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: id, text, parse_mode: 'HTML', disable_web_page_preview: true })
    }).then(r => r.ok).catch(() => false)
  ));
  if (!sent.some(Boolean)) return res.status(502).json({ ok: false, error: 'telegram' });
  return res.status(200).json({ ok: true });
};
