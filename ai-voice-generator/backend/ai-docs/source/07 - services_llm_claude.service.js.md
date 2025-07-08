# services\llm\claude.service.js

```js
import axios from 'axios';

const styleMap = {
  neutral: 'neutre, objectif, informatif sans émotion',
  casual: 'décontracté, langage simple et familier',
  technical: 'axé sur les faits techniques et professionnels',
  narrative: 'raconté comme une histoire avec du rythme',
  press: 'journalistique, structuré comme un article de presse',
  humorous: 'humoristique, ton léger et amusant',
  poetic: 'poétique, style littéraire et imagé',
  dramatic: 'dramatique, avec tension et intensité émotionnelle',
  emotional: 'émotionnel, centré sur les sentiments et l’empathie',
  cinematic: 'cinématographique, ambiance visuelle et descriptive comme un film',
  historical: 'historique, avec mise en contexte chronologique',
  marketing: 'marketing, valorisant avec un ton accrocheur',
  scientific: 'scientifique, ton analytique et factuel',
  satirical: 'satirique, critique subtile et ironique',
  inspirational: 'inspirant, motivant avec des citations et une mise en valeur',
  minimal: 'très court, phrases simples et dépouillées',
  dialog: 'rédigé sous forme de dialogue entre deux personnes',
  interview: 'présenté comme une interview fictive, questions-réponses',
};

const lengthMap = {
  short: 'environ 30 mots, réponse très concise',
  medium: 'environ 60 mots, réponse équilibrée',
  long: 'environ 100 mots, réponse développée mais synthétique',
};

async function reply(type, input) {
  try {

    const name = input.name || 'inconnu';
    const rawStyle = input.style || 'neutral';
    const rawLength = input.length || 'medium';

    const style = styleMap[rawStyle] || styleMap.neutral;
    const length = lengthMap[rawLength] || lengthMap.medium;

    const prompt = type === 'summary'
      ? `Fais un résumé du film "${name}" avec un style ${style}, ${length}.`
      : `Écris une biographie de ${name} avec un style ${style}, ${length}.`;

    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: 'claude-3-5-sonnet-20240620',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json',
        },
      },
    );

    const result = response.data.content?.[0]?.text;
    if (!result) { throw new Error('Réponse vide de Claude.'); }

    return result;

  } catch (error) {
    const code = error.response?.status;
    const data = error.response?.data;

    if (code === 401) {
      console.error('❌ Erreur 401 : Clé API Claude manquante ou invalide.');
    } else {
      console.error('❌ Erreur Claude :', code, data || error.message);
    }

    throw new Error(
      code === 401
        ? 'Erreur 401 : clé API Claude absente ou invalide.'
        : `Erreur Claude : ${data?.error?.message || error.message}`,
    );
  }
}

export default reply;

```
