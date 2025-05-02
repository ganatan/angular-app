# Angular 19 — Fullstack Application

**👉 Version française disponible ici** : [![Français](./ui/version-fr.png)](./README.md)

---

<div align="center">

## 🔧 Continuous Integration

[![Frontend Angular CI](https://github.com/ganatan/angular-app/actions/workflows/frontend-angular.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/frontend-angular.yml)
[![Backend JavaScript ESM CI](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript-esm.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript-esm.yml)
[![Backend JavaScript CJS CI](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript-cjs.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript-cjs.yml)
[![Backend Spring Boot CI](https://github.com/ganatan/angular-app/actions/workflows/backend-springboot.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-springboot.yml)

---

## 📦 Docker Images

[![Docker Image Version - Backend JavaScript ESM](https://img.shields.io/docker/v/ganatan/backend-javascript-esm?label=Backend%20JavaScript%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/backend-javascript-esm)
[![Docker Image Version - Backend JavaScript CJS](https://img.shields.io/docker/v/ganatan/backend-javascript-cjs?label=Backend%20JavaScript%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/backend-javascript-cjs)
[![Docker Image Version - Frontend Angular](https://img.shields.io/docker/v/ganatan/frontend-angular?label=Frontend%20Angular%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/frontend-angular)

---

Modern fullstack applications built with Angular 19, Node.js 20.x, and Java 21, featuring a scalable, and production-ready architecture.

## 📦 Tech Stack

![Angular](https://img.shields.io/badge/angular-19-red)
![Node](https://img.shields.io/badge/node-20.x-blue)
![Java](https://img.shields.io/badge/java-21-brightgreen)
![Docker](https://img.shields.io/badge/Docker-24.x-blue?logo=docker)
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

- **`backend-javascript ESM`**  
  Express.js API in JavaScript (ESM) with PostgreSQL, MySQL or mock data

- **`backend-javascript commonjs`**  
  Express.js API in JavaScript (CJS) with PostgreSQL, MySQL or mock data

- **`backend-typescript`**  
  Express.js API in TypeScript with PostgreSQL, MySQL or mock data

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


## 🐳 Deployment with Docker

### ▶️ Prerequisites
- Docker must be installed on your machine: [Install Docker](https://docs.docker.com/get-docker/)

### ▶️ Launch the Angular frontend with Docker

```bash
docker pull ganatan/frontend-angular
docker run -d -p 4200:4200 ganatan/frontend-angular
# http://localhost:4200
```

### ▶️ Launch the JavaScript ESM backend with Docker

```bash
docker pull ganatan/backend-javascript-esm
docker run -d -p 3000:3000 ganatan/backend-javascript-esm
# http://localhost:3000
```

---

## 👤 Author

- **Danny** – [www.ganatan.com](https://www.ganatan.com)

---

## 📚 Documentation

- 🇫🇷 [French tutorials](https://www.ganatan.com/tutorials)  
- 🇬🇧 [English tutorials](https://www.ganatan.com/en/tutorials)
