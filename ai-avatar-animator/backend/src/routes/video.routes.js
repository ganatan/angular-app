import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import testJoggAI from '../services/video/test-joggai.js';

import { generateVideo } from '../services/video/video.service.js';
import { uploadMedia, getVideoFromProjectId } from '../services/video/video.service.js';

import { checkVideoMock, generateVideoMock } from '../mocks/video/video.mock.js';

dotenv.config();

const router = express.Router();
const useMock = process.env.USE_MOCK === 'true';

function safeFilename(name, llm) {
  return `${name.toLowerCase().replace(/\s+/g, '-')}-${llm}`;
}

router.post('/generate/:llm', async (req, res) => {
  const { llm } = req.params;
  const { name } = req.body;

  const avatarId = process.env.JOGGAI_AVATAR_ID;
  const voiceId = process.env.JOGGAI_VOICE_ID;

  const fileName = safeFilename(name, llm);
  const jsonPath = path.join(process.cwd(), 'storage', 'data', `${fileName}.json`);


  try {

    if (!fs.existsSync(jsonPath)) {
      return res.status(404).json({ success: false, error: 'Fichier JSON introuvable' });
    }

    const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    const text = jsonContent.text;

    let result;

    if (useMock) {
      result = await generateVideoMock(name, llm);
      console.log('🟡 AVATAR MOCK -', result.project_id);
    } else {
      console.log('00000000001:' + name)
      console.log('00000000001:' + avatarId)
      console.log('00000000001:' + voiceId)
      result = await generateVideo({ name, avatarId, voiceId ,text});
      console.log('✅ AVATAR réel -', result.project_id);
    }

    return res.json({
      success: true,
      project_id: result.project_id
    });

  } catch (err) {
    console.error('❌ Erreur génération AVATAR :', err.message);
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

router.post('/check', async (req, res) => {
  const { llm, project_id, name } = req.body;

  // 317205826fec43ac847b2f3b3bc674a5
  console.log('00000000001:' + project_id);
  let fileName = safeFilename(name, llm);
  if (!llm || !project_id) {
    return res.status(400).json({ success: false, error: 'Paramètres manquants' });
  }

  try {
    if (useMock) {
      fileName = await checkVideoMock(llm);
      console.log('🟡 AVATAR MOCK -' + fileName);
    } else {
      const result = await getVideoFromProjectId(project_id, fileName, llm);

      if (!result.ready) {
        return res.json({
          success: true,
          url: '',
          poster: '',
          ready: false
        });
      }

      fileName = result.fileName;
      console.log('✅ AVATAR réel -');
    }

    const publicVideo = `/storage/videos/${fileName}.mp4`;
    const publicImage = `/storage/videos/${fileName}.png`;

    const fullUrlVideo = `${req.protocol}://${req.get('host')}${publicVideo}`;
    const fullUrlPoster = `${req.protocol}://${req.get('host')}${publicImage}`;

    return res.json({
      success: true,
      url: fullUrlVideo,
      poster: fullUrlPoster,
      ready: true
    });

  } catch (err) {
    console.error('❌ Erreur vérification vidéo :', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
});

router.get('/health/upload', async (req, res) => {
  const localPath = path.resolve('storage/voices', 'ridley-scott-test.mp3');
  const publicUrl = await uploadMedia('ridley-scott-test.mp3', localPath);
  let result = true;
  console.log('✅ Fichier disponible publiquement :', publicUrl);
  res.json({ success: result, publicUrl: publicUrl });
});

router.get('/health/lva', async (req, res) => {
  const avatarId = process.env.JOGGAI__AVATAR_ID || '1025';
  const result = await testJoggAI(avatarId);
  res.json({ success: result });
});

export default router;
