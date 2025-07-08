import axios from 'axios';

function buildPrompt(topic, count) {
  return `
Tu dois générer ${count} intervenants pour un podcast dont le titre est : "${topic}".

- ${count / 2} seront POUR, ${count / 2} seront CONTRE ce sujet.
- Il doit y avoir autant d'hommes que de femmes (parité totale).
- Pour chaque intervenant, donne :
  - un **prénom crédible**, venant de cultures variées (français, anglais, allemands, italiens, espagnols, etc.)
  - une **personnalité** courte (humaine, crédible, sans caricature)
  - la **position** : "Pour" ou "Contre"

Attention :
- Les **prénoms doivent être uniques** à chaque nouvelle génération.
- Évite les prénoms déjà utilisés dans les réponses précédentes.
- Indique uniquement des prénoms dont le genre est facilement identifiable.
- Rends-moi le tout au format JSON tableau strictement comme ceci :

[
  { "name": "...", "stance": "Pour", "personality": "..." },
  { "name": "...", "stance": "Pour", "personality": "..." },
  { "name": "...", "stance": "Contre", "personality": "..." },
  { "name": "...", "stance": "Contre", "personality": "..." }
]
`;
}

function cleanJsonBlock(rawText) {
  let text = rawText.trim();
  if (text.startsWith('```json')) {
    text = text.replace(/^```json\s*/, '').replace(/```$/, '').trim();
  } else if (text.startsWith('```')) {
    text = text.replace(/^```\s*/, '').replace(/```$/, '').trim();
  }
  return text;
}

async function generateSpeaker(topic, count = 4) {
  try {
    if (!topic) throw new Error('Sujet manquant');
    if (count % 2 !== 0) throw new Error('Le nombre d’intervenants doit être pair');

    const prompt = buildPrompt(topic, count);

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.8,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    let rawText = response.data.choices[0].message.content;
    rawText = cleanJsonBlock(rawText);

    const parsed = JSON.parse(rawText);

    const items = parsed.map((item) => ({
      name: item.name,
      role: 'Intervenant',
      stance: item.stance,
      personality: item.personality,
    }));

    return {
      moderator: {
        name: 'Ganatan',
        role: 'Animateur',
        stance: 'Neutre',
        personality: 'Neutre, pose les questions et relance le débat',
      },
      items,
    };

  } catch (error) {
    const status = error.response?.status;
    const data = error.response?.data;
    let errorMessage = '';

    if (status === 401) {
      errorMessage = 'Erreur 401 : Clé API OpenAI manquante ou invalide.';
    } else if (status) {
      errorMessage = `Erreur OpenAI (${status}) : ${JSON.stringify(data)}`;
    } else if (error.message.includes('Unexpected token')) {
      errorMessage = 'Réponse non JSON : format inattendu. Utilise console.log pour examiner le texte brut.';
    } else {
      errorMessage = `Erreur inattendue : ${error.message}`;
    }

    console.error(`❌ generateSpeaker error: ${errorMessage}`);
    return errorMessage;
  }
}

export default generateSpeaker;
