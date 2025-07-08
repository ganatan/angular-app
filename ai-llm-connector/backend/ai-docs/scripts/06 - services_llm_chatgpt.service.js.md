# Tutoriel : Création d'une fonction de réponse avec Node.js et l'API OpenAI

Dans ce tutoriel, nous allons examiner une fonction `reply` qui utilise l'API OpenAI pour générer des réponses en fonction de différents styles et longueurs de réponses. 

## Code complet

Voici le code complet que nous allons décomposer et expliquer :

```js
import axios from 'axios';

const styleMap = {
  //...
};

const lengthMap = {
  //...
};

async function reply(type, input) {
  //...
}

export default reply;
```

## Importation de la bibliothèque Axios

```js
import axios from 'axios';
```

Nous importons la bibliothèque `axios` pour effectuer des requêtes HTTP. Axios est une bibliothèque populaire qui offre une API facile à utiliser pour effectuer des requêtes HTTP.

## Définition des mappages de style et de longueur

```js
const styleMap = {
  //...
};

const lengthMap = {
  //...
};
```

Ces deux objets mappent des chaînes de caractères à des descriptions de styles et de longueurs de réponses. `styleMap` définit différents styles de réponses, tandis que `lengthMap` définit différentes longueurs de réponses.

## Fonction de réponse

```js
async function reply(type, input) {
  //...
}
```

C'est la fonction principale qui génère la réponse. Elle est asynchrone car elle effectue une requête HTTP, qui est une opération asynchrone.

## Préparation de la requête

```js
const name = input.name || 'inconnu';
const rawStyle = input.style || 'neutral';
const rawLength = input.length || 'medium';

const style = styleMap[rawStyle] || styleMap.neutral;
const length = lengthMap[rawLength] || lengthMap.medium;

const prompt = type === 'summary'
  ? `Fais un résumé du film "${name}" avec un style ${style}, ${length}.`
  : `Écris une biographie de ${name} avec un style ${style}, ${length}.`;
```

Dans cette section, nous préparons les données pour la requête. Nous utilisons les valeurs par défaut si certaines données ne sont pas fournies.

## Envoi de la requête

```js
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
```

Ici, nous envoyons une requête POST à l'API OpenAI. Nous utilisons le modèle `gpt-4-turbo` et nous passons notre message dans le corps de la requête.

## Gestion des erreurs

```js
try {
  //...
} catch (error) {
  //...
}
```

Nous utilisons un bloc `try/catch` pour gérer les erreurs qui peuvent se produire lors de l'envoi de la requête. Si une erreur se produit, nous la consignons et la renvoyons pour qu'elle puisse être traitée par le code appelant.

## Exportation de la fonction de réponse

```js
export default reply;
```

Enfin, nous exportons la fonction `reply` pour qu'elle puisse être utilisée dans d'autres modules.