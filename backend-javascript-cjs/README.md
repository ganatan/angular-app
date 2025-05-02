![Coverage Badge](https://img.shields.io/badge/Coverage-99%25-brightgreen)

# backend-javascript-cjs

**👉 If you don’t speak French, the English version is here**: [![English](../../ui/version-en.png)](./README.en.md)

Starter backend Node.js utilisant **CommonJS**, avec Express, Jest, ESLint et Webpack.

## 🚀 Fonctionnalités

- Serveur Express
- Support CommonJS (`require`)
- Documentation API avec Swagger (via swagger-ui-express et swagger-jsdoc)
- Linting avec ESLint
- Tests unitaires, d'intégration et e2e avec Jest
- Analyse de couverture (`jest --coverage`)
- Rechargement à chaud (`nodemon`)
- Build avec Webpack
- Script pour générer la structure du projet

## 📦 Scripts npm

- `npm run dev` : démarrage en mode développement (nodemon)
- `npm run start` : démarrage en mode production
- `npm run lint` : lint du code
- `npm run test` : tous les tests
- `npm run test:unit` : tests unitaires uniquement
- `npm run test:integration` : tests d'intégration
- `npm run test:e2e` : tests end-to-end
- `npm run coverage` : rapport de couverture
- `npm run build` : build avec Webpack
- `npm run generate-project-structure` : affichage de la structure du projet
- `npm run docker:build` : construction de l'image Docker backend-javascript-cjs
- `npm run docker:run` : exécution du conteneur Docker sur le port 3000

## 🛠 Installation

```bash
npm install
```

## 🧪 Lancer les tests

```bash
npm test
```

## 🚀 Lancer le serveur

```bash
npm run dev
```

Accès à l'API : [http://localhost:3000](http://localhost:3000)  
Documentation Swagger : [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
