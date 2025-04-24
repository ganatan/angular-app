# Angular 19 – Application Fullstack

<div align="center">

### 🔧 CI Status

[![Frontend CI](https://github.com/ganatan/angular-app/actions/workflows/frontend.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/frontend.yml)
[![Backend CI](https://github.com/ganatan/angular-app/actions/workflows/backend.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript.yml)

### 📦 Versions

![Angular](https://img.shields.io/badge/angular-19-red)
![Node](https://img.shields.io/badge/node-20.x-blue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ganatan/angular-app/blob/master/LICENSE)

</div>



**👉 If you don’t speak French, the English version is here**: [![English](./ui/version-en.png)](./README.en.md)

<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="logo ganatan">

Ce dépôt contient une **Application Web fullstack**.

- **frontend-angular**: Application frontend Angular 19
- **backend-javascript**: API Javascript utilisant des données simulées ou réelles (PostgreSQL/MySQL)
- **backend-typescript**: API TypeScript utilisant des données simulées ou réelles (PostgreSQL/MySQL)

---
## 🌐 Démo en ligne

🔗 [Voir la démo Angular](https://angular.ganatan.com)

<p align="center">
  <p align="center">
    <a href="https://angular.ganatan.com/">
      <img src="https://media.giphy.com/media/9BuBBLc7keCgRojp92/giphy.gif" alt="Angular 19 Example 
      Application"/>
    </a>
  </p>
</p>

---

## 📁 Structure du projet

### 🧩 Frontend

- **`frontend-angular`**  
  Application Angular 19 (Incluant Routing, Lazy loading, SSR, PWA, SEO).

---

### 🚀 Backends

- **`backend-javascript`**  
  API Express.js en JavaScript (ESM)  
  Données mockées ou base de données (PostgreSQL/MySQL)

- **`backend-typescript`**  
  API Express.js en TypeScript  
  Données mockées ou base de données (PostgreSQL/MySQL)

---

### 🧪 Starters techniques (bonus)

- **`backend-javascript-cjs`**  
  Starter JavaScript Node.js avec CommonJS (`require/module.exports`, ESLint, Jest, Webpack)

- **`backend-javascript-esm`**  
  Starter JavaScript Node.js avec ESM (`import/export`, ESLint, Jest, Webpack)

- **`backend-java21-springboot`**  
  Starter Java21 Spring Boot (JUnit)

---

## 🔧 Configuration du frontend (Angular)

Dans `environment.ts` :

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

### ▶️ Frontend Angular

```bash
git clone https://github.com/ganatan/angular-app.git
cd angular-app/frontend-angular
npm install
npm start
```

🔗 [http://localhost:4200](http://localhost:4200)

---

### ▶️ Backend Node.js (ESM)

```bash
cd angular-app/backend-javascript
npm install
npm start
```

🔗 [http://localhost:3000](http://localhost:3000)

---

### ▶️ Backend TypeScript

```bash
cd angular-app/backend-typescript
npm install
npm start
```

🔗 [http://localhost:3000](http://localhost:3000)

---

## 👤 Auteur

- **Danny** – [www.ganatan.com](https://www.ganatan.com)

---

## 📚 Documentation

- 🇫🇷 [Tutoriels en français](https://www.ganatan.com/tutorials)  
- 🇬🇧 [Tutorials in English](https://www.ganatan.com/en/tutorials)
