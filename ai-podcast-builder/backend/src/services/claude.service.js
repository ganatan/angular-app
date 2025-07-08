import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function sendToClaude(text) {
  const url = 'https://api.anthropic.com/v1/messages';

  const headers = {
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01',
    'Content-Type': 'application/json',
  };

  const body = {
    model: 'claude-3-5-sonnet-20240620',
    max_tokens: 1000,
    temperature: 0.7,
    messages: [
      {
        role: 'user',
        content: text,
      },
    ],
  };

  try {
    const response = await axios.post(url, body, { headers });
    console.log('Claude reply OK');

    return response.data.content[0].text;
  } catch (err) {
    console.error('Claude API Error:', err.response?.data || err.message);
    throw err;
  }
}

export { sendToClaude };
