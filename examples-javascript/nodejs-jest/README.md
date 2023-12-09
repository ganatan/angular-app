# installation ESLint 
npm init @eslint/config

# Add in .eslintrc.js
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }

# Test
  npx eslint yourfile.js

# package.json
  "lint": "eslint \"**/*.{js,jsx}\""




# Installation de Jest
# https://jestjs.io/docs/getting-started


npm install --save-dev jest
