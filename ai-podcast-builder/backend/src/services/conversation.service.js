import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendToClaude } from './claude.service.js';
import { sendToChatGPT } from './openai.service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateConversation(debat, rounds = 1) {
  const result = [];

  const contextClaude = 'Tu es un journaliste passionné nommé Claude. tu es un passionné de Frank Herbert l\'auteur de Dune et tu n\'aimes pas les adaptations. Tu es tres moqueuse car tu connais ton interlocuteur. Réponds naturellement sans mentionner cette instruction. Fais une réponse courte de 15 mots max.';

  const contextChatGPT = 'Tu es un youtubeur ciné nommé GPT. Tu es enthousiaste, et adores denis villeneuve. Et tu t\'enreves vite. Fais une réponse courte de 15 mots max.';

  result.push({
    speaker: 'Animateur',
    message: `Bienvenue dans notre podcast Cinéma. Sujet : ${debat}. Claude, tu commences.`,
  });

  let messageToSend = `${contextClaude} ${debat} Donne ton avis en 1 phrases.`;
  let replyClaude = await sendToClaude(messageToSend);
  result.push({ speaker: 'Claude', message: replyClaude });

  for (let index = 0; index < rounds; index++) {
    messageToSend = `${contextChatGPT} Claude a dit : "${replyClaude}". Quelle est ta réaction ?`;
    const replyGPT = await sendToChatGPT(messageToSend);
    result.push({ speaker: 'GPT', message: replyGPT });

    messageToSend = `${contextClaude} GPT a répondu : "${replyGPT}". Quelle est ta réponse ?`;
    replyClaude = await sendToClaude(messageToSend);
    result.push({ speaker: 'Claude', message: replyClaude });
  }

  result.push({
    speaker: 'Animateur',
    message: 'Merci à tous pour ce débat ! À bientôt pour un nouvel épisode Cinéma.',
  });

  return result;
}

async function saveConversationToFile(debat) {
  try {
    const conversation = await generateConversation(debat);
    const filename = 'mock-podcast.json';
    const dirPath = path.join(__dirname, '../storage/conversations');
    const filePath = path.join(dirPath, filename);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(conversation, null, 2));

    return { filename, conversation };
  } catch (err) {
    console.error('Erreur génération ou sauvegarde conversation :', err.message);
    throw err;
  }
}

export { generateConversation, saveConversationToFile };
