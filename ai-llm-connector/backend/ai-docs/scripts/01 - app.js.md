# Tutoriel Node.js avec Express, CORS et dotenv

Ce tutoriel explique comment configurer un serveur Node.js en utilisant le framework Express, en ajoutant une gestion des CORS (Cross-Origin Resource Sharing) et en utilisant dotenv pour gérer les variables d'environnement.

## Importation des modules

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import aiRoutes from './routes/ai.js';
import aiServices from './config/ai-services.js';
```

Dans cette section, nous importons les modules nécessaires pour notre application. 

- `express` est un framework pour Node.js qui simplifie le développement de serveurs web.
- `cors` est un package Node.js qui fournit un middleware pour activer les CORS avec diverses options.
- `dotenv` est un module qui charge les variables d'environnement à partir d'un fichier `.env` dans `process.env`.
- `aiRoutes` est un module personnalisé qui contient les routes pour notre API.
- `aiServices` est un module personnalisé qui contient la configuration de nos services d'IA.

## Configuration de l'application

```js
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
```

Ici, nous configurons notre application. 

- Nous commençons par charger les variables d'environnement à l'aide de `dotenv.config()`.
- Nous instancions ensuite notre application Express et définissons le port sur lequel notre serveur écoutera.
- Nous ajoutons ensuite le middleware CORS à notre application pour permettre les requêtes cross-origin.
- Enfin, nous utilisons `express.json()` pour analyser les corps des requêtes entrantes dans un middleware avant vos gestionnaires, disponibles sous la propriété `req.body`.

## Définition des routes

```js
app.use('/api/ai', aiRoutes);

app.get('/api/ai/services', (req, res) => {
  res.json({ services: aiServices });
});
```

Dans cette section, nous définissons les routes pour notre API. 

- Nous utilisons `app.use` pour ajouter le middleware `aiRoutes` à notre application. Toutes les requêtes commençant par `/api/ai` utiliseront ce middleware.
- Nous définissons ensuite une route GET pour `/api/ai/services` qui renvoie un objet JSON contenant nos services d'IA.

## Démarrage du serveur

```js
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
```

Enfin, nous démarrons notre serveur en écoutant sur le port spécifié. Une fois que le serveur est démarré, un message est affiché dans la console pour indiquer que le serveur est en écoute.