
import axios from 'axios';
import fs from 'fs';

async function generateVoice(text, voiceId, outputPath) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`;

  try {
    const response = await axios.post(
      url,
      {
        text: text,
        model_id: 'eleven_multilingual_v2',
      },
      {
        headers: {
          'xi-api-key': process.env.ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        responseType: 'stream',
      },
    );

    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log('✅ Audio enregistré :', outputPath);
        resolve(outputPath);
      });
      writer.on('error', (err) => {
        console.error('❌ Erreur lors de l’écriture du fichier :', err.message);
        reject(err);
      });
    });

  } catch (error) {
    const status = error.response?.status;

    if (status) {
      console.error(`❌ Erreur ElevenLabs ${status}`);
    } else {
      console.error('❌ Erreur inconnue :', error.message);
    }

    throw error;
  }
}

export default generateVoice;
