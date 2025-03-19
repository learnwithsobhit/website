const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);
    const date = new Date();

    const telegramMessage = `
🪔 *Thank you for contacting us!* 🪔

*Visitor Name:* ${name}
*Email:* ${email}
*Message:* ${message}
`;

    // Send Telegram notification
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown'
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Telegram notification sent successfully', data })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send telegram notification' })
    };
  }
}; 