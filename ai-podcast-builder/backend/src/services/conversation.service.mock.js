import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateMockConversation(debat, rounds = 3) {
  const result = [];

  result.push({
    speaker: 'Animateur',
    message: `Bienvenue dans notre podcast IA. Sujet : ${debat}. Claude, tu commences.`,
  });

  let claudeMsg = `Je pense que ${debat.toLowerCase()} est une question complexe. L'avenir nous le dira.`;
  result.push({ speaker: 'Claude', message: claudeMsg });

  for (let index = 0; index < rounds; index++) {
    const gptMsg = 'Effectivement Claude, mais je crois que les outils vont rendre l\'apprentissage plus accessible et personnalisé.';
    result.push({ speaker: 'GPT', message: gptMsg });

    claudeMsg = `C est un bon point GPT, mais attention aux inégalités numériques qui pourraient se creuser davantage.`;
    result.push({ speaker: 'Claude', message: claudeMsg });
  }

  result.push({
    speaker: 'Animateur',
    message: 'Merci à tous pour ce débat ! À bientôt pour un nouvel épisode IA.',
  });

  return result;
}

async function saveMockConversationToFile(debat) {
  const conversation = generateMockConversation(debat);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `mock-podcast-${timestamp}.json`;
  const conversationsDir = path.join(__dirname, '../storage/conversations');

  if (!fs.existsSync(conversationsDir)) {
    fs.mkdirSync(conversationsDir, { recursive: true });
  }

  const filePath = path.join(conversationsDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(conversation, null, 2));

  return { filename, conversation };
}

export { saveMockConversationToFile };
