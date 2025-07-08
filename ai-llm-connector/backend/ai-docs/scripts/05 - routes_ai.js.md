# Tutoriel Node.js : Création d'un routeur Express pour les services LLM

Dans ce tutoriel, nous allons décomposer un bloc de code Node.js qui illustre comment créer un routeur Express pour gérer les requêtes vers les services LLM.

## Importation des modules nécessaires

```js
import express from 'express';
import dotenv from 'dotenv';

import chatgptMock from '../mock/llm/chatgpt.mock.js';
import claudeMock from '../mock/llm/claude.mock.js';
import chatgptReal from '../services/llm/chatgpt.service.js';
import claudeReal from '../services/llm/claude.service.js';
```

Dans cette section, nous importons tous les modules nécessaires. `express` pour la création de notre application web, `dotenv` pour la gestion des variables d'environnement. Nous importons également des modules de services mock et réels pour deux fournisseurs LLM, `chatgpt` et `claude`.

## Configuration et initialisation

```js
dotenv.config();

const router = express.Router();
const useMock = process.env.USE_MOCK === 'true';
```

Ici, nous initialisons `dotenv` pour charger les variables d'environnement. Nous créons également une nouvelle instance de routeur Express et déterminons si nous devons utiliser les services mock ou réels en fonction de la variable d'environnement `USE_MOCK`.

## Fonctions auxiliaires

```js
function isUnauthorizedError(message) {
  return message.includes('unauthorized') || message.includes('401');
}

function getProvider(llm) {
  const providers = {
    chatgpt: {
      mock: chatgptMock,
      real: chatgptReal,
    },
    claude: {
      mock: claudeMock,
      real: claudeReal,
    },
  };

  return providers[llm] || null;
}

async function handleLLMRequest(type, llm, data) {
  const provider = getProvider(llm);
  if (!provider) { return { error: 'unknown-provider' }; }

  const fn = useMock ? provider.mock : provider.real;

  return { data: await fn(type, data) };
}
```

Dans cette section, nous définissons trois fonctions auxiliaires. `isUnauthorizedError` vérifie si un message d'erreur indique une erreur d'autorisation. `getProvider` retourne le fournisseur LLM approprié en fonction du nom fourni. `handleLLMRequest` gère les requêtes LLM en appelant la fonction appropriée du fournisseur LLM et retourne le résultat.

## Gestion des requêtes

```js
router.post('/:type/:llm', async (req, res) => {
  const { type, llm } = req.params;
  const input = req.body;

  try {
    const { data, error } = await handleLLMRequest(type, llm, input);

    if (error) {
      return res.status(400).json({ success: false, llm: llm, data: error });
    }

    return res.json({ success: true, llm: llm, data: data });

  } catch (err) {
    const msg = err.message?.toLowerCase() || '';
    const isUnauthorized = isUnauthorizedError(msg);

    return res.status(500).json({
      success: false,
      llm: llm,
      data: isUnauthorized ? 'unauthorized API KEY' : 'internal-error',
    });
  }
});

export default router;
```

Enfin, nous définissons un gestionnaire pour les requêtes POST vers notre routeur. Nous extrayons les paramètres de la requête, appelons notre fonction `handleLLMRequest` et renvoyons une réponse appropriée en fonction du résultat. En cas d'erreur, nous vérifions si c'est une erreur d'autorisation et renvoyons un message d'erreur approprié.

Et voilà ! Vous avez maintenant une meilleure compréhension de la façon dont vous pouvez créer un routeur Express pour gérer les requêtes vers les services LLM dans une application Node.js.