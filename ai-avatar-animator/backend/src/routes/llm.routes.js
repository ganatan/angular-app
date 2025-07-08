import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';

import chatgptMock from '../mocks/llm/chatgpt.mock.js';
import claudeMock from '../mocks/llm/claude.mock.js';
import chatgptService from '../services/llm/chatgpt.service.js';
import claudeService from '../services/llm/claude.service.js';

dotenv.config();

const router = express.Router();
const useMock = process.env.USE_MOCK === 'true';

function isUnauthorizedError(message) {
  return message.includes('unauthorized') || message.includes('401');
}

function safeFilename(name, llm) {
  return `${name.toLowerCase().replace(/\s+/g, '-')}-${llm}`;
}

function getProvider(llm) {
  const providers = {
    chatgpt: {
      mock: chatgptMock,
      real: chatgptService,
    },
    claude: {
      mock: claudeMock,
      real: claudeService,
    },
  };

  return providers[llm] || null;
}

async function callLLM(type, llm, data) {
  try {
    const provider = getProvider(llm);
    if (!provider) {
      return { error: 'unknown-provider' };
    }

    const handlerFunction = useMock ? provider.mock : provider.real;
    const result = await handlerFunction(type, data);

    return { data: result };

  } catch (err) {
    console.error('❌ callLLM error:', err);

    return { error: 'internal-error' };
  }
}

router.post('/:type/:llm', async (req, res) => {
  const { type, llm } = req.params;

  const input = req.body;

  try {
    const { data, error } = await callLLM(type, llm, input);

    if (error) {
      return res.status(400).json({ success: false, data: error });
    }

    const name = input.name;
    const fileName = safeFilename(name, llm);
    const jsonPath = path.join(process.cwd(), 'storage', 'data', `${fileName}.json`);
    await fs.mkdir(path.dirname(jsonPath), { recursive: true });
    await fs.writeFile(jsonPath, JSON.stringify({ name: name, text: data }, null, 2));

    return res.json({ success: true, data: data });

  } catch (err) {

    console.error('❌ Erreur serveur :', err.message);
    const msg = err.message?.toLowerCase() || '';
    const errorText = isUnauthorizedError(msg) ? 'unauthorized API KEY' : 'internal-error';

    return res.status(500).json({ success: false, data: errorText });
  }
});

export default router;
