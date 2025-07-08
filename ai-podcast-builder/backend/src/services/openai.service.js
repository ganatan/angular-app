import axios from 'axios';

async function sendToChatGPT(content) {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4-turbo',
      messages: [{ role: 'user', content: content }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data.choices[0].message.content;
}

export { sendToChatGPT };
