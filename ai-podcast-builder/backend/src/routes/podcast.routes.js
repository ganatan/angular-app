import express from 'express';
import fs from 'fs/promises';
import path from 'path';

import { saveConversationToFile } from '../services/conversation.service.js';
import { saveMockConversationToFile } from '../services/conversation.service.mock.js';
import { generateAllAudioFromJson } from '../services/audio.service.js';

import generateSpeaker from '../services/speaker/speaker.service.js';
import generateSpeakerMock from '../mocks/podcast/speaker.mock.js';

const router = express.Router();
const useMock = process.env.USE_MOCK === 'true';

function safeFilename(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

router.post('/speaker', async (req, res) => {
  const { topic, count } = req.body;

  try {
    let result;

    if (useMock) {
      result = await generateSpeakerMock(topic, count);
    } else {
      result = await generateSpeaker(topic, count);
    }

    const filename = safeFilename(topic);
    const jsonPath = path.join(process.cwd(), 'storage', 'speakers', `${filename}.json`);
    await fs.mkdir(path.dirname(jsonPath), { recursive: true });
    await fs.writeFile(jsonPath, JSON.stringify(result, null, 2));

    return res.json({
      success: true,
      data: result,
    });

  } catch (err) {
    console.error('❌ Erreur génération Speakers :', err.message);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

router.get('/dialogues', async (req, res) => {
  res.status(500).json({ success: false, test: 'dialogues' });
});

router.get('/voices', async (req, res) => {
  res.status(500).json({ success: false, test: 'voices' });
});

router.get('/videos', async (req, res) => {
  res.status(500).json({ success: false, test: 'videos' });
});

router.get('/generate', async (req, res) => {
  const debat = req.query.topic || 'Dune de Denis Villeneuve : chef-d\'œuvre de science-fiction ou exercice de style surcoté ?';
  try {
    const { filename, conversation } = await saveConversationToFile(debat);
    res.json({ success: true, file: filename, conversation: conversation });
  } catch (error) {
    console.error('Erreur génération podcast:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/mock', async (req, res) => {
  const debat = req.query.topic || "Dune de Denis Villeneuve : chef-d'œuvre de science-fiction ou exercice de style surcoté ?";
  try {
    const { filename, conversation } = await saveMockConversationToFile(debat);
    res.json({ success: true, file: filename, conversation: conversation });
  } catch (error) {
    console.error('Erreur mock podcast:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/audio/:filename', async (req, res) => {
  try {
    const result = await generateAllAudioFromJson(req.params.filename);
    res.json({ success: true, ...result });
  } catch (err) {
    console.error('Erreur audio:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
