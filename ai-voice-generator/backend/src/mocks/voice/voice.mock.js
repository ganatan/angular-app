import fs from 'fs';
import path from 'path';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function voiceMock(text, voiceId, outputPath, llm = 'chatgpt') {
  await delay(1000);
  const selectedLLM = ['chatgpt', 'claude'].includes(llm) ? llm : 'chatgpt';
  const sourceFile = path.resolve(`src/mocks/voice/ridley-scott-${selectedLLM}.mp3`);
  if (!fs.existsSync(sourceFile)) { throw new Error(`Fichier mock introuvable : ${sourceFile}`); }
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.copyFileSync(sourceFile, outputPath);

  return outputPath;
}
