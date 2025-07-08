import fs from 'fs';
import path from 'path';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function checkVideoMock(llm = 'chatgpt') {
  try {
    await delay(1000);

    const selected = ['chatgpt', 'claude'].includes(llm) ? llm : 'chatgpt';
    const baseName = `ridley-scott-${selected}`;

    const sourceDir = path.resolve('src/mocks/video');
    const sourceMp4 = path.join(sourceDir, `${baseName}.mp4`);
    const sourcePng = path.join(sourceDir, `${baseName}.png`);

    const outputDir = path.resolve('storage/videos');
    const targetMp4 = path.join(outputDir, `${baseName}.mp4`);
    const targetPng = path.join(outputDir, `${baseName}.png`);

    if (!fs.existsSync(sourceMp4)) {
      throw new Error(`Fichier MP4 manquant : ${sourceMp4}`);
    }
    if (!fs.existsSync(sourcePng)) {
      throw new Error(`Fichier PNG manquant : ${sourcePng}`);
    }

    fs.mkdirSync(outputDir, { recursive: true });
    fs.copyFileSync(sourceMp4, targetMp4);
    fs.copyFileSync(sourcePng, targetPng);

    return baseName;
  } catch (err) {
    console.error('❌ Erreur checkVideoMock :', err.message);
    throw err;
  }
}

export async function generateVideoMock(name, llm = 'chatgpt') {
  await delay(1000);

  return {
    success: true,
    project_id: 'mock-backend-project-id',
  };
}
