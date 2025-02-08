
# Angular 19 Fullstack Application

[![English](./ui/version-en.png) English](./README.md) | [![Français](./ui/version-fr.png) Français](./README.fr.md)

<table>
<tr>
<td>
  <a href="https://www.ganatan.com/en">
    <img src="./ui/ganatan-about-github.png" align="right"
    alt="Ganatan Angular Example Demo" width="140" height="140">
  </a>

This repository contains a fullstack web application with separate frontend and backend services. It includes:

- **Frontend**: An Angular 19 application with Bootstrap for the UI
- **Backend (JavaScript)**: A Node.js/Express application using JavaScript
- **Backend (TypeScript)**: A Node.js/Express application using TypeScript
- **Library**: An Angular 18 library with Ganatan components

Each component can be installed, developed, and deployed independently.

---

## Table of Contents

- [Angular 19 Fullstack Application](#angular-19-fullstack-application)
  - [Table of Contents](#table-of-contents)
  - [Live Demo](#live-demo)
- [Lighthouse Audit](#lighthouse-audit)
  - [Frontend - Angular](#frontend---angular)
    - [Quick Start](#quick-start)
    - [Development](#development)
    - [Docker](#docker)
  - [Backend - Node.js (JavaScript)](#backend---nodejs-javascript)
    - [Quick Start](#quick-start-1)
    - [Development](#development-1)
  - [Backend - Node.js (TypeScript)](#backend---nodejs-typescript)
    - [Quick Start](#quick-start-2)
    - [Development](#development-2)
  - [Author](#author)
  - [Documentation](#documentation)

---

## Live Demo

A live demo is available at [https://angular.ganatan.com](https://angular.ganatan.com).

[![Angular Example Application](https://media.giphy.com/media/9BuBBLc7keCgRojp92/giphy.gif)](https://angular.ganatan.com)

---

# Lighthouse Audit

<p align="center">
  <p align="center">
    <a href="https://angular.ganatan.com">
      <img src="./ui/search-engine-optimization-avec-angular-lighthouse-after.png" alt="Ganatan Lighthouse SEO Angular Example Demo"/>
    </a>
  </p>
</p>

## Frontend - Angular

### Quick Start

To get started with the Angular frontend:

```bash
# Clone the repository
git clone https://github.com/ganatan/angular-app.git
cd angular-app/frontend-angular

# Install dependencies and start the development server
npm install
npm start
```

Visit [http://localhost:4200](http://localhost:4200) in your browser.

### Development

- `npm run start` – Start the development server
- `npm run lint` – Run the linter
- `npm run test` – Run tests
- `npm run build` – Build the application for production

### Docker

To run the Angular application in Docker:

```bash
# Build Docker image
docker build -t angular-starter:1.0.0 .

# Run Docker container
docker run -d -p 4000:4000 angular-starter:1.0.0
```

Visit [http://localhost:4000](http://localhost:4000) in your browser.

---

## Backend - Node.js (JavaScript)

### Quick Start

To get started with the JavaScript backend:

```bash
# Navigate to the backend directory
cd angular-app/backend-node-javascript

# Install dependencies and start the development server
npm install
npm start
```

Visit [http://localhost:9000](http://localhost:9000) in your browser.

### Development

- `npm run start` – Start the development server
- `npm run lint` – Run the linter
- `npm run test` – Run tests
- `npm run build` – Build the application for production
- `npm run serve` – Start the server in production mode

---

## Backend - Node.js (TypeScript)

### Quick Start

To get started with the TypeScript backend:

```bash
# Navigate to the backend directory
cd angular-app/backend-node-typescript

# Install dependencies and start the development server
npm install
npm start
```

Visit [http://localhost:9000](http://localhost:9000) in your browser.

### Development

- `npm run start` – Start the development server
- `npm run lint` – Run the linter
- `npm run test` – Run tests
- `npm run build` – Build the application for production
- `npm run serve` – Start the server in production mode

---

## Author

- **Danny** - [Ganatan](https://www.ganatan.com)

## Documentation

For step-by-step tutorials and more information:

- **English** - [https://www.ganatan.com/tutorials/en](https://www.ganatan.com/tutorials/en)
- **Français** - [https://www.ganatan.com/tutorials](https://www.ganatan.com/tutorials)
