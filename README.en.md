# Angular 19 – Fullstack Application

**👉 Si vous parlez français, la version française est ici** : [![Français](./ui/version-en.png)](./README.md)

<div align="center">

### 🔧 CI Status

[![Frontend Angular CI](https://github.com/ganatan/angular-app/actions/workflows/frontend-angular.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/frontend-angular.yml)
[![Backend JavaScript CI](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript.yml)

### 📦 Versions

![Angular](https://img.shields.io/badge/angular-19-red)
![Node](https://img.shields.io/badge/node-20.x-blue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ganatan/angular-app/blob/master/LICENSE)

</div>

---

## 📚 Table of Contents

- [🔧 CI Status](#-ci-status)
- [🌐 Live Demo](#-live-demo)
- [📁 Project Structure](#-project-structure)
- [🛠 Configuration](#-frontend-configuration-angular)
- [🔗 Exposed APIs](#-exposed-apis)
- [⚙️ Quick Start](#️-quick-start)
- [👤 Author](#-author)
- [📚 Documentation](#-documentation)

---


<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="logo ganatan">

This repository contains a **fullstack web application** using Angular 19 + Node.js or TypeScript with PostgreSQL/MySQL or mocked data.

---

## 🌐 Live Demo

🔗 [Check out the Angular demo](https://angular.ganatan.com)

<p align="center">
  <a href="https://angular.ganatan.com/">
    <img src="https://media.giphy.com/media/9BuBBLc7keCgRojp92/giphy.gif" alt="Angular 19 Example Application"/>
  </a>
</p>

---

## 📁 Project Structure

### 🧩 Frontend

- **`frontend-angular`**  
  Angular 19 app (with Routing, Lazy loading, SSR, PWA, SEO)

### 🚀 Backends

- **`backend-javascript`**  
  Express.js API in JavaScript (ESM) with PostgreSQL, MySQL or mock data

- **`backend-typescript`**  
  Express.js API in TypeScript with PostgreSQL, MySQL or mock data

### 🧪 Technical Starters (bonus)

- **`backend-javascript-cjs`** : Node.js (CommonJS), ESLint, Jest, Webpack
- **`backend-javascript-esm`** : Node.js (ESM), ESLint, Jest, Webpack
- **`backend-java21-springboot`** : Java 21 Spring Boot starter (JUnit)

---

## 🔧 Frontend Configuration (Angular)

In `frontend-angular/src/environments/environment.ts`:

```ts
useDatabase: false,
backend: 'http://localhost:3000',
```

| `useDatabase` | Mode                                  |
|---------------|---------------------------------------|
| `false`       | **Mocked** data handled in frontend   |
| `true`        | **Real** data fetched from backend    |

---

## 🛠 Backend Configuration

In `.env` file:

```env
PORT=3000
DB_CLIENT=mock # mock | pg | mysql
```

| `DB_CLIENT` | Data Source           |
|-------------|------------------------|
| `mock`      | Mocked data            |
| `pg`        | PostgreSQL             |
| `mysql`     | MySQL                  |

---

## 🔗 Exposed APIs

| Resource      | URL                                        |
|---------------|---------------------------------------------|
| Continents    | [http://localhost:3000/continents](http://localhost:3000/continents) |
| Cities        | [http://localhost:3000/cities](http://localhost:3000/cities)         |
| Countries     | [http://localhost:3000/countries](http://localhost:3000/countries)   |
| Persons       | [http://localhost:3000/persons](http://localhost:3000/persons)       |
| Professions   | [http://localhost:3000/professions](http://localhost:3000/professions) |

---

## ⚙️ Quick Start

### ▶️ Clone the project

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

## 👤 Author

- **Danny** – [www.ganatan.com](https://www.ganatan.com)

---

## 📚 Documentation

- 🇫🇷 [French tutorials](https://www.ganatan.com/tutorials)  
- 🇬🇧 [English tutorials](https://www.ganatan.com/en/tutorials)
