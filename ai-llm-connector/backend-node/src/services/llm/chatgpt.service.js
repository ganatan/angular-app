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
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4-turbo',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data.choices[0].message.content.trim();

  } catch (error) {
    const status = error.response?.status;
    const data = error.response?.data;
    let errorMessage = '';

    if (status === 401) {
      errorMessage = 'Erreur 401 : Clé API OpenAI manquante ou invalide.';
    } else if (status) {
      errorMessage = `Erreur OpenAI (${status}) : ${JSON.stringify(data)}`;
    } else {
      errorMessage = `Erreur inattendue : ${error.message}`;
    }

    console.error(`❌ reply error: ${errorMessage}`);

    return errorMessage;
  }
}

export default reply;
