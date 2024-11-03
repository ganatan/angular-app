
# Application Fullstack Angular 18

[Read in English](./README.md)

Ce dépôt contient une application web fullstack avec des services frontend et backend séparés. Il inclut :

- **Frontend** : une application Angular 18 avec Bootstrap pour l’interface utilisateur
- **Backend (JavaScript)** : une application Node.js/Express en JavaScript
- **Backend (TypeScript)** : une application Node.js/Express en TypeScript

Chaque composant peut être installé, développé et déployé indépendamment.

---

## Table des matières

- [Démo en ligne](#démo-en-ligne)
- [Frontend - Angular](#frontend---angular)
- [Backend - Node.js (JavaScript)](#backend---nodejs-javascript)
- [Backend - Node.js (TypeScript)](#backend---nodejs-typescript)
- [Auteur](#auteur)
- [Documentation](#documentation)

---

## Démo en ligne

Une démo en ligne est disponible à [https://angular.ganatan.com](https://angular.ganatan.com).

[![Application Exemple Angular](https://media.giphy.com/media/9BuBBLc7keCgRojp92/giphy.gif)](https://angular.ganatan.com)

---

## Frontend - Angular

### Démarrage rapide

Pour démarrer avec le frontend Angular :

```bash
# Cloner le dépôt
git clone https://github.com/ganatan/angular-app.git
cd angular-app/frontend-angular

# Installer les dépendances et démarrer le serveur de développement
npm install
npm start
```

Visitez [http://localhost:4200](http://localhost:4200) dans votre navigateur.

### Développement

- `npm run start` – Démarrer le serveur de développement
- `npm run lint` – Exécuter le linter
- `npm run test` – Exécuter les tests
- `npm run build` – Compiler l'application pour la production

### Docker

Pour exécuter l’application Angular dans Docker :

```bash
# Créer l'image Docker
docker build -t angular-starter:1.0.0 .

# Exécuter le conteneur Docker
docker run -d -p 4000:4000 angular-starter:1.0.0
```

Visitez [http://localhost:4000](http://localhost:4000) dans votre navigateur.

---

## Backend - Node.js (JavaScript)

### Démarrage rapide

Pour démarrer avec le backend en JavaScript :

```bash
# Accéder au répertoire backend
cd angular-app/backend-node-javascript

# Installer les dépendances et démarrer le serveur de développement
npm install
npm start
```

Visitez [http://localhost:9000](http://localhost:9000) dans votre navigateur.

### Développement

- `npm run start` – Démarrer le serveur de développement
- `npm run lint` – Exécuter le linter
- `npm run test` – Exécuter les tests
- `npm run build` – Compiler l'application pour la production
- `npm run serve` – Démarrer le serveur en mode production

---

## Backend - Node.js (TypeScript)

### Démarrage rapide

Pour démarrer avec le backend en TypeScript :

```bash
# Accéder au répertoire backend
cd angular-app/backend-node-typescript

# Installer les dépendances et démarrer le serveur de développement
npm install
npm start
```

Visitez [http://localhost:9000](http://localhost:9000) dans votre navigateur.

### Développement

- `npm run start` – Démarrer le serveur de développement
- `npm run lint` – Exécuter le linter
- `npm run test` – Exécuter les tests
- `npm run build` – Compiler l'application pour la production
- `npm run serve` – Démarrer le serveur en mode production

---

## Auteur

- **Danny** - [Ganatan](https://www.ganatan.com)

## Documentation

Pour des tutoriels étape par étape et plus d’informations :

- **English** - [https://www.ganatan.com/tutorials/en](https://www.ganatan.com/tutorials/en)
- **Français** - [https://www.ganatan.com/tutorials](https://www.ganatan.com/tutorials)
