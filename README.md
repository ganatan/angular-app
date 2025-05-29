# Application Fullstack : Angular 20, Node.js et Java 21

<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="logo ganatan">

## 🚀 Objectifs du projet
- ✅ Stack frontend / backend complète  
- ✅ Compatibilité CI/CD et Docker  
- ✅ Déploiement simple (Docker optionnel)  
- ✅ Composants isolés et testables  
---

**👉 Looking for the English version?** : [![English](./ui/version-en.png)](./README.en.md)

---

| Composant              | Description                                                   |
|------------------------|---------------------------------------------------------------|
| **Frontend**           | Angular 20 — SPA avec Routing, SSR, PWA, SEO                  |
| **Backend Javascript (ESM)**   | Node.js 22 + Express — API REST avec données mockées ou BDD   |
| **Backend Javascript (CJS)**   | Variante CJS, même structure que la version ESM              |
| **Backend TypeScript** | Node.js 22 + TypeScript — API typée avec données ou BDD       |
| **Backend Java Springboot**       | Java 21 + Spring Boot — API REST simple et moderne            |

---

## 🔧 Intégration Continue (CI)

| Projet                         | Badge CI |
|-------------------------------|----------|
| Frontend Angular              | [![Frontend Angular CI](https://github.com/ganatan/angular-app/actions/workflows/frontend-angular.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/frontend-angular.yml) |
| Backend JavaScript (ESM)      | [![Backend JavaScript ESM CI](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript-esm.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript-esm.yml) |
| Backend JavaScript (CJS)      | [![Backend JavaScript CJS CI](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript-cjs.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript-cjs.yml) |
| Backend TypeScript            | [![Backend TypeScript CI](https://github.com/ganatan/angular-app/actions/workflows/backend-typescript.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-typescript.yml) |
| Backend Java Spring Boot      | [![Backend Spring Boot CI](https://github.com/ganatan/angular-app/actions/workflows/backend-java-springboot.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-java-springboot.yml) |

---

## 📦 Images Docker

| Composant                     | Badge Docker |
|------------------------------|---------------|
| Backend JavaScript (ESM)     | [![Docker Image Version - Backend JavaScript ESM](https://img.shields.io/docker/v/ganatan/backend-javascript-esm?label=Backend%20JavaScript%20Docker%20esm&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/backend-javascript-esm) |
| Backend JavaScript (CJS)     | [![Docker Image Version - Backend JavaScript CJS](https://img.shields.io/docker/v/ganatan/backend-javascript-cjs?label=Backend%20JavaScript%20Docker%20cjs&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/backend-javascript-cjs) |
| Backend TypeScript           | [![Docker Image Version - Backend TypeScript](https://img.shields.io/docker/v/ganatan/backend-typescript?label=Backend%20TypeScript%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/backend-typescript) |
| Frontend Angular             | [![Docker Image Version - Frontend Angular](https://img.shields.io/docker/v/ganatan/frontend-angular?label=Frontend%20Angular%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/frontend-angular) |

---

## 📦 Stack technologique

![Angular](https://img.shields.io/badge/angular-20-red)
![Node](https://img.shields.io/badge/node-22.x-blue)
![Java](https://img.shields.io/badge/java-21-brightgreen)
![Docker](https://img.shields.io/badge/Docker-24.x-blue?logo=docker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ganatan/angular-app/blob/master/LICENSE)

---

## 📚 Table des matières

- [Intégration Continue (CI)](#-intégration-continue-ci)
- [Images Docker](#-images-docker)
- [Objectifs du projet](#-objectifs-du-projet)
- [Stack technologique](#-stack-technologique)
- [Démo en ligne](#-démo-en-ligne)
- [Structure du projet](#-structure-du-projet)
- [Configuration du frontend Angular](#-configuration-du-frontend-angular)
- [Configuration des backends](#-configuration-des-backends)
- [APIs exposées](#-apis-exposées)
- [Démarrage rapide](#-démarrage-rapide)
- [Déploiement avec Docker](#-déploiement-avec-docker)
- [Author](#-author)
- [Documentation](#-documentation)


---

## 🌐 Démo en ligne

🔗 [Voir la démo Angular](https://angular.ganatan.com)

<p align="center">
  <a href="https://angular.ganatan.com/">
    <img src="https://media.giphy.com/media/9BuBBLc7keCgRojp92/giphy.gif" alt="Angular 20 Example Application"/>
  </a>
</p>

---

## 📁 Structure du projet

### 🧩 Frontend

- **`frontend-angular`**  
  Application Angular 19 (Incluant Routing, Lazy loading, SSR, PWA, SEO)

### 🚀 Backends

- **`backend-javascript ESM`**  
  API Express.js en JavaScript (ESM) avec PostgreSQL, MySQL ou données mockées

- **`backend-javascript CJS`**  
  API Express.js en JavaScript (commonJS) avec PostgreSQL, MySQL ou données mockées

- **`backend-typescript`**  
  API Express.js en TypeScript avec PostgreSQL, MySQL ou données mockées

---

## 🔧 Configuration du frontend (Angular)

Dans `frontend-angular/src/environments/environment.ts` :

```ts
useDatabase: false,
backend: 'http://localhost:3000',
```

| `useDatabase` | Mode                                  |
|---------------|---------------------------------------|
| `false`       | Données **mockées** côté frontend     |
| `true`        | Données **réelles** via le backend    |

---

## 🛠 Configuration des backends

Dans le fichier `.env` :

```env
PORT=3000
DB_CLIENT=mock # mock | pg | mysql
```

| `DB_CLIENT` | Source de données      |
|-------------|------------------------|
| `mock`      | Données simulées       |
| `pg`        | PostgreSQL             |
| `mysql`     | MySQL                  |

---

## 🔗 APIs exposées

| Ressource     | URL                                     |
|---------------|------------------------------------------|
| Continents    | [http://localhost:3000/continents](http://localhost:3000/continents) |
| Cities        | [http://localhost:3000/cities](http://localhost:3000/cities)         |
| Countries     | [http://localhost:3000/countries](http://localhost:3000/countries)   |
| Persons       | [http://localhost:3000/persons](http://localhost:3000/persons)       |
| Professions   | [http://localhost:3000/professions](http://localhost:3000/professions) |

---

## ⚙️ Démarrage rapide

### ▶️ Cloner le projet

```bash
git clone https://github.com/ganatan/angular-app.git
cd angular-app
```

### ▶️ Frontend Angular

```bash
cd frontend-angular
npm install
npm start
# http://localhost:4200
```

### ▶️ Backend JavaScript ESM

```bash
cd backend-javascript-esm
npm install
npm start
# http://localhost:3000
```

### ▶️ Backend JavaScript CJS

```bash
cd backend-javascript-cjs
npm install
npm start
# http://localhost:3000
```

### ▶️ Backend TypeScript

```bash
cd backend-typescript
npm install
npm start
# http://localhost:3000
```

---


## 🐳 Déploiement avec Docker

### ▶️ Prérequis
- Docker doit être installé sur votre machine : [Installation Docker](https://docs.docker.com/get-docker/)

### ▶️ Lancer le frontend Angular via Docker

```bash
docker pull ganatan/frontend-angular
docker run -d -p 4200:4200 ganatan/frontend-angular
# http://localhost:4200
```

### ▶️ Lancer le backend Javascript ESM via Docker

```bash
docker pull ganatan/backend-javascript-esm
docker run -d -p 8080:8080 ganatan/backend-javascript-esm
# http://localhost:8080
```

### ▶️ Lancer le backend Javascript CJS via Docker

```bash
docker pull ganatan/backend-javascript-cjs
docker run -d -p 8080:8080 ganatan/backend-javascript-cjs
# http://localhost:8080
```

### ▶️ Lancer le backend Typescript via Docker

```bash
docker pull ganatan/backend-typescript
docker run -d -p 8080:8080 ganatan/backend-typescript
# http://localhost:8080
```

---

## 👤 Author

- **Danny** – [www.ganatan.com](https://www.ganatan.com)

---

## 📚 Documentation

- 🇫🇷 [Tutoriels en français](https://www.ganatan.com/tutorials)  
- 🇬🇧 [Tutorials in English](https://www.ganatan.com/en/tutorials)
