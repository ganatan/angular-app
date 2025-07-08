
import fs from 'fs';
import path from 'path';
import generateVoice from './voice.service.js';

async function testElevenLabs(voiceId) {
  const fileName = 'test-elevenlabs';
  const filePath = path.join(process.cwd(), 'storage', 'voices', `${fileName}.mp3`);
  const outputDir = path.dirname(filePath);

  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    await generateVoice('Test de voix avec Eleven', voiceId, filePath);

    console.log('✅ Test TTS réussi - fichier créé :', filePath);

    return {
      success: true,
      file: filePath,
      voiceId: voiceId,
    };

  } catch (err) {
    console.error(`❌ Échec du test TTS ElevenLabs :${err.message}`);

    return {
      success: false,
      error: err.message,
    };
  }
}

export default testElevenLabs;
