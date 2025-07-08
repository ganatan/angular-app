import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../../ai-docs/source');
const OUT_DIR = path.join(__dirname, '../../ai-docs/scripts');

const USE_MOCK = process.env.USE_MOCK === 'true';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

function mockExplainBlock(code, fileName) {
  console.log('🧪 Mode mock activé : réponse simulée');

  return `# Fichier : ${fileName};

\`\`\`js
${code}
\`\`\`

## Explication

Ce fichier met en place une logique de backend avec Node.js, utilisée dans une application Angular + IA.`;
}

async function explainWithGPTBlock(code) {
  console.log('🚀 Envoi à OpenAI pour explication...');

  const prompt = `Tu es un expert pédagogue. Génère un fichier Markdown très lisible pour un tutoriel.
Voici un bloc de code Node.js :

${code}

Tu dois :
- afficher le code (avec \`\`\`js)
- lister les explications sous chaque bloc ou section
- structurer avec des titres si possible
- ne pas expliquer ligne par ligne mais par concept ou rôle
- utiliser un ton clair, précis, technique

Génère uniquement le contenu Markdown.`;

  const payload = {
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.4,
  };

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error('❌ Erreur OpenAI :', res.status, await res.text());

    return '[Erreur GPT]';
  }

  const data = await res.json();
  console.log('✅ Réponse OpenAI reçue');

  return data.choices[0].message.content.trim();
}

async function processMarkdownFile(filePath) {
  const fileName = path.basename(filePath);
  console.log(`\n📂 Traitement du fichier : ${fileName}`);
  const content = fs.readFileSync(filePath, 'utf8');

  let codeBlock = '';
  const match = content.match(/```js\s*([\s\S]*?)\s*```/);
  if (match) {
    codeBlock = match[1].trim();
    console.log(`🔎 Bloc \`\`\`js\`\`\` extrait (${codeBlock.length} caractères)`);
  } else {
    console.warn('⚠️ Aucun bloc ```js``` trouvé. Utilisation du contenu brut.');
    codeBlock = content.trim();
  }

  const explanation = USE_MOCK
    ? mockExplainBlock(codeBlock, fileName)
    : await explainWithGPTBlock(codeBlock);

  const outFile = path.join(OUT_DIR, fileName);
  fs.writeFileSync(outFile, explanation);
  console.log(`💾 Fichier généré : ${outFile}`);
}

async function main() {
  console.log(`📁 Source : ${DOCS_DIR}`);
  console.log(`📁 Destination : ${OUT_DIR}`);
  console.log(`⚙️ Mode : ${USE_MOCK ? 'MOCK' : 'REAL GPT'}\n`);

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    console.log('📁 Dossier de sortie créé.');
  }

  const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
  console.log(`📄 Fichiers détectés : ${files.length}`);

  for (const file of files) {
    await processMarkdownFile(path.join(DOCS_DIR, file));
  }

  console.log('\n🏁 Tous les fichiers ont été traités.');
}

main();
