# Angular 19 – Application Fullstack

**👉 If you don’t speak French, the English version is here**: [![English](./ui/version-en.png)](./README.en.md)


<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="logo ganatan">

Ce dépôt contient une **application web fullstack** composée de deux projets distincts :

- **frontend-angular** : application Angular 19  
- **backend-nodejs** : API Express.js (Node.js) avec gestion de données mockées ou réelles (PostgreSQL/MySQL)
- **backend-typescript** : API Typescript & Express.js (Node.js) avec gestion de données mockées ou réelles (PostgreSQL/MySQL)

---

## 🌐 Démo en ligne  
[Voir la démo](https://angular.ganatan.com)

---

## 🔧 Fonctionnement du frontend (Angular)

Par défaut, l'application Angular utilise le fichier `environment.ts` :

```ts
useDatabase: false,
backend: 'http://localhost:3000',
```

### Deux modes disponibles :

| `useDatabase` | Fonctionnement                         |
|---------------|----------------------------------------|
| `false`       | Utilise des **données mockées** côté frontend |
| `true`        | Utilise des **données réelles** fournies par le backend (`http://localhost:3000`) |

---

## 🛠️ Fonctionnement du backend (Node.js)

Le backend est configuré via le fichier `.env` :

```env
PORT=3000
# === DEFAULT DB CLIENT ===
DB_CLIENT=mock # pg | pg-sequelize | mysql | mock
```

### Comportement en fonction du `DB_CLIENT` :

| `DB_CLIENT`     | Données utilisées            |
|-----------------|------------------------------|
| `mock`          | Données simulées (mock)      |
| `pg`            | PostgreSQL                   |
| `pg-sequelize`  | PostgreSQL via ORM Sequelize |
| `mysql`         | MySQL                        |

---

## 🔗 API disponibles

Les URL disponibles par défaut via le backend sont :

- [http://localhost:3000/continents](http://localhost:3000/continents)
- [http://localhost:3000/cities](http://localhost:3000/cities)
- [http://localhost:3000/countries](http://localhost:3000/countries)
- [http://localhost:3000/persons](http://localhost:3000/persons)
- [http://localhost:3000/professions](http://localhost:3000/professions)

---

## 🚀 Démarrage rapide

### Frontend

```bash
git clone https://github.com/ganatan/angular-app.git
cd angular-app/frontend-angular
npm install
npm start
```

Accessible via : [http://localhost:4200](http://localhost:4200)

---

### Backend Nodejs

```bash
cd angular-app/backend-nodejs
npm install
npm start
```

Accessible at: [http://localhost:3000](http://localhost:3000)

---

### Backend Typescript

```bash
cd angular-app/backend-typescript
npm install
npm start
```

Accessible at: [http://localhost:3000](http://localhost:3000)

---

## 👤 Auteur

- **Danny** – [www.ganatan.com](https://www.ganatan.com)

---

## 📚 Documentation

- 🇫🇷 [Tutoriels en français](https://www.ganatan.com/tutorials)
- 🇬🇧 [Tutorials in English](https://www.ganatan.com/en/tutorials)
