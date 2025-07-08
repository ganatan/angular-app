import fs from 'fs';
import path from 'path';
import { generateVideo } from './video.service.js';

async function testJoggAI(avatarId) {
  const fileName = 'test-joggai';
  const voicePath = path.join(process.cwd(), 'storage', 'voices', 'test-elevenlabs.mp3');
  const outputPath = path.join(process.cwd(), 'storage', 'videos', `${fileName}.mp4`);
  const outputDir = path.dirname(outputPath);

  try {
    if (!fs.existsSync(voicePath)) { throw new Error('Fichier audio manquant'); }
    if (!fs.existsSync(outputDir)) { fs.mkdirSync(outputDir, { recursive: true }); }

    await generateVideo({
      script: 'Test de Video avec JoggAI',
      audioPath: voicePath,
      avatarId: avatarId,
      outputPath: outputPath,
    });

    console.log('✅ Test JoggAI réussi - vidéo créée :', outputPath);

    return {
      success: true,
      file: outputPath,
      avatarId: avatarId,
    };

  } catch (err) {
    console.error('❌ Échec du test JoggAI :', err.message);

    return {
      success: false,
      error: err.message,
    };
  }
}

export default testJoggAI;
