# routes\ai.js

```js
import express from 'express';
import dotenv from 'dotenv';

import chatgptMock from '../mock/llm/chatgpt.mock.js';
import claudeMock from '../mock/llm/claude.mock.js';
import chatgptReal from '../services/llm/chatgpt.service.js';
import claudeReal from '../services/llm/claude.service.js';

dotenv.config();

const router = express.Router();
const useMock = process.env.USE_MOCK === 'true';

function isUnauthorizedError(message) {
  return message.includes('unauthorized') || message.includes('401');
}

function getProvider(llm) {
  const providers = {
    chatgpt: {
      mock: chatgptMock,
      real: chatgptReal,
    },
    claude: {
      mock: claudeMock,
      real: claudeReal,
    },
  };

  return providers[llm] || null;
}

async function handleLLMRequest(type, llm, data) {
  const provider = getProvider(llm);
  if (!provider) { return { error: 'unknown-provider' }; }

  const fn = useMock ? provider.mock : provider.real;

  return { data: await fn(type, data) };
}

router.post('/:type/:llm', async (req, res) => {
  const { type, llm } = req.params;
  const input = req.body;

  try {
    const { data, error } = await handleLLMRequest(type, llm, input);

    if (error) {
      return res.status(400).json({ success: false, llm: llm, data: error });
    }

    return res.json({ success: true, llm: llm, data: data });

  } catch (err) {
    const msg = err.message?.toLowerCase() || '';
    const isUnauthorized = isUnauthorizedError(msg);

    return res.status(500).json({
      success: false,
      llm: llm,
      data: isUnauthorized ? 'unauthorized API KEY' : 'internal-error',
    });
  }
});

export default router;

```
