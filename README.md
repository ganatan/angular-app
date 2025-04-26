# Angular 19 — Application Fullstack

**👉 Looking for the English version?** [![English](./ui/version-en.png)](./README.en.md)

---

<div align="center">

## 🔧 Intégration Continue

[![Frontend Angular CI](https://github.com/ganatan/angular-app/actions/workflows/frontend-angular.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/frontend-angular.yml)
[![Backend JavaScript CI](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript.yml)
[![Backend Spring Boot CI](https://github.com/ganatan/angular-app/actions/workflows/backend-springboot.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-springboot.yml)

---

## 📦 Images Docker 

[![Docker Image Version - Backend JavaScript](https://img.shields.io/docker/v/ganatan/backend-javascript?label=Backend%20JavaScript%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/backend-javascript)
[![Docker Image Version - Frontend Angular](https://img.shields.io/docker/v/ganatan/frontend-angular?label=Frontend%20Angular%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/frontend-angular)
---

Application fullstack basée sur Angular 19, Node.js 20.x et Java 21, avec une architecture scalable et optimisée pour la production.

## 📦 Stack technologique

![Angular](https://img.shields.io/badge/angular-19-red)
![Node](https://img.shields.io/badge/node-20.x-blue)
![Java](https://img.shields.io/badge/java-21-brightgreen)
![Docker](https://img.shields.io/badge/Docker-24.x-blue?logo=docker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ganatan/angular-app/blob/master/LICENSE)

</div>

---
## 📚 Table des matières

- [🔧 CI Status](#-intégration-continue)
- [📦 Docker Images](#-images-docker)
- [📦 Stack Technologique](#-stack-technologique)
- [🌐 Démo en ligne](#-démo-en-ligne)
- [📁 Structure du projet](#-structure-du-projet)
- [🛠 Configuration](#-configuration-du-frontend-angular)
- [🔗 APIs exposées](#-apis-exposées)
- [⚙️ Démarrage rapide](#️-démarrage-rapide)
- [🐳 Déploiement avec Docker](#-déploiement-avec-docker)
- [👤 Auteur](#-auteur)
- [📚 Documentation](#-documentation)

---

<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="logo ganatan">

Ce dépôt contient une **Application Web fullstack** avec Angular 19 + Node.js ou TypeScript + PostgreSQL/MySQL ou données simulées.

---

## 🌐 Démo en ligne

🔗 [Voir la démo Angular](https://angular.ganatan.com)

<p align="center">
  <a href="https://angular.ganatan.com/">
    <img src="https://media.giphy.com/media/9BuBBLc7keCgRojp92/giphy.gif" alt="Angular 19 Example Application"/>
  </a>
</p>

---

## 📁 Structure du projet

### 🧩 Frontend

- **`frontend-angular`**  
  Application Angular 19 (Incluant Routing, Lazy loading, SSR, PWA, SEO)

### 🚀 Backends

- **`backend-javascript`**  
  API Express.js en JavaScript (ESM) avec PostgreSQL, MySQL ou données mockées

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

### ▶️ Backend JavaScript

```bash
cd backend-javascript
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

### ▶️ Lancer le backend Javascript via Docker

```bash
docker pull ganatan/backend-javascript
docker run -d -p 3000:3000 ganatan/backend-javascript
# http://localhost:3000
```

---

## 👤 Author

- **Danny** – [www.ganatan.com](https://www.ganatan.com)

---

## 📚 Documentation

- 🇫🇷 [Tutoriels en français](https://www.ganatan.com/tutorials)  
- 🇬🇧 [Tutorials in English](https://www.ganatan.com/en/tutorials)
