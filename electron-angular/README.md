
# electron-angular

> **Electron + Angular + WebSocket**  
> Exemple de connecteur conversationnel, avec une version HTML statique et une version Angular, piloté via Electron.

---

## 🟦 Objectifs

- Lancer une application Electron avec Angular en frontend
- Tester en mode HTML pur ou Angular via la variable d’environnement `MODE`
- Support d’un petit serveur WebSocket local pour les tests
- Gestion de données simulées via `useMock`

---

---

## 🟦 Installation

```bash
npm install
```

puis dans le dossier `src/renderer/angular` :

```bash
cd src/renderer/angular
npm install
```

---

## 🟦 Développement

### Démarrer Angular seul

```bash
cd src/renderer/angular
npm start
```

### Démarrer Electron (mode dev)

```bash
npm run dev
```

> cela utilise `NODE_ENV=development`

---

## 🟦 Build de production

- **build en mode Angular (prod)**  

```bash
npm run build
```

---

## 🟦 Variables d’environnement

```
# .env
MODE=angular
```

---

## 🟦 Tests

```bash
npm test
```

---

