# backend-javascript-commonjs

Starter backend for Node.js using **CommonJS**, with Express, Jest, ESLint, and Webpack.

## 🚀 Features

- Express server
- CommonJS module support (`require`)
- Linting with ESLint
- Unit, integration, and e2e testing with Jest
- Coverage report (`jest --coverage`)
- Hot reload with `nodemon`
- Build system with Webpack
- Script to print project folder structure

## 📁 Structure

```
src/
  app.js              # Express app
  server.js           # Server entry point
  controllers/        # Controllers
  data/               # Static data
__tests__/
  unit/               # Unit tests
  integration/        # Integration tests
  e2e/                # End-to-end tests
tools/
  scripts/            # Utility scripts
```

## 📦 npm Scripts

- `npm run dev`: start in dev mode (nodemon)
- `npm run start`: start in production mode
- `npm run lint`: lint the code
- `npm run test`: run all tests
- `npm run test:unit`: run unit tests
- `npm run test:integration`: run integration tests
- `npm run test:e2e`: run end-to-end tests
- `npm run coverage`: coverage report
- `npm run build`: build with Webpack
- `npm run generate-project-structure`: display folder structure

## 🛠 Installation

```bash
npm install
```

## 🧪 Run tests

```bash
npm test
```

## 📚 License

ISC
