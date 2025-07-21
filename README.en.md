# Fullstack Application  : Angular 20, Node.js and Java 21

<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="logo ganatan">

## 🚀 Project Goals
- ✅ Complete frontend / backend stack  
- ✅ CI/CD and Docker compatibility  
- ✅ Simple deployment (Docker optional)  
- ✅ Isolated and testable components  
---

**👉 Version française disponible ici** : [![Français](./ui/version-fr.png)](./README.md)

---

| Component              | Description                                                   |
|------------------------|---------------------------------------------------------------|
| **Frontend**           | Angular 20 — SPA with Routing, SSR, PWA, SEO                  |
| **Backend JavaScript**         | Node.js 22 + Express — REST API with mocked data or database   |
| **Backend TypeScript** | Node.js 22 + TypeScript — Typed REST API with data or database |
| **Backend Java**             | Java 21 + Spring Boot — Simple and modern REST API              |

---

## 🔧 Continuous Integration (CI)

| Project                      | CI Badge |
|-----------------------------|----------|
| Frontend Angular            | [![Frontend Angular CI](https://github.com/ganatan/angular-app/actions/workflows/frontend-angular.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/frontend-angular.yml) |
| Backend JavaScript          | [![Backend JavaScript CI](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-javascript.yml) |
| Backend TypeScript          | [![Backend TypeScript CI](https://github.com/ganatan/angular-app/actions/workflows/backend-typescript.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-typescript.yml) |
| Backend Java Spring Boot    | [![Backend Spring Boot CI](https://github.com/ganatan/angular-app/actions/workflows/backend-springboot.yml/badge.svg?branch=master)](https://github.com/ganatan/angular-app/actions/workflows/backend-springboot.yml) |

---

## 📦 Docker Images

| Component                   | Docker Badge |
|----------------------------|---------------|
| Backend JavaScript           | [![Docker Image Version - Backend JavaScript](https://img.shields.io/docker/v/ganatan/backend-javascript?label=Backend%20JavaScript%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/backend-javascript) |
| Backend TypeScript           | [![Docker Image Version - Backend TypeScript](https://img.shields.io/docker/v/ganatan/backend-typescript?label=Backend%20TypeScript%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/backend-typescript) |
| Backend Java                 | [![Docker Image Version - Backend Java](https://img.shields.io/docker/v/ganatan/backend-java?label=Backend%20Java%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/backend-java) |
| Frontend Angular             | [![Docker Image Version - Frontend Angular](https://img.shields.io/docker/v/ganatan/frontend-angular?label=Frontend%20Angular%20Docker&logo=docker&sort=semver)](https://hub.docker.com/r/ganatan/frontend-angular) |


## 📦 Tech Stack

![Angular](https://img.shields.io/badge/angular-20-red)
![Node](https://img.shields.io/badge/node-22.x-blue)
![Java](https://img.shields.io/badge/java-21-brightgreen)
![Docker](https://img.shields.io/badge/Docker-24.x-blue?logo=docker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ganatan/angular-app/blob/master/LICENSE)

---

## 📚 Table of Contents

- [Continuous Integration (CI)](#-continuous-integration-ci)
- [Docker Images](#-docker-images)
- [Tech Stack](#-tech-stack)
- [Live Demo](#-live-demo)
- [Project Structure](#-project-structure)
- [Frontend Configuration (Angular)](#-frontend-configuration-angular)
- [Backend Configuration](#-backend-configuration)
- [Exposed APIs](#-exposed-apis)
- [Quick Start](#-quick-start)
- [Deployment with Docker](#-deployment-with-docker)
- [Author](#-author)
- [Documentation](#-documentation)
---

## 🌐 Live Demo

🔗 [Check out the Angular demo](https://angular.ganatan.com)

<p align="center">
  <a href="https://angular.ganatan.com/">
    <img src="https://media.giphy.com/media/9BuBBLc7keCgRojp92/giphy.gif" alt="Angular 20 Example Application"/>
  </a>
</p>

---

## 📁 Project Structure

### 🧩 Frontend

- **`frontend-angular`**  
  Angular 19 app (with Routing, Lazy loading, SSR, PWA, SEO)

### 🚀 Backends

- **`backend-javascript`**  
  Express.js API in JavaScript with PostgreSQL, MySQL or mock data

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


## 🐳 Deployment with Docker

### ▶️ Prerequisites
- Docker must be installed on your machine: [Install Docker](https://docs.docker.com/get-docker/)

### ▶️ Launch the Angular frontend with Docker

```bash
docker pull ganatan/frontend-angular
docker run -d -p 4200:4200 ganatan/frontend-angular
# http://localhost:4200
```

### ▶️ Launch the JavaScript backend with Docker

```bash
docker pull ganatan/backend-javascript
docker run -d -p 8080:8080 ganatan/backend-javascript
# http://localhost:8080
```

### ▶️ Launch the Typescript backend with Docker

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

- 🇫🇷 [French tutorials](https://www.ganatan.com/tutorials)  
- 🇬🇧 [English tutorials](https://www.ganatan.com/en/tutorials)
