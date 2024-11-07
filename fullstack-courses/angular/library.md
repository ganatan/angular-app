
# Angular Library

## Creation

- [Check Creating Libraries](https://angular.dev/tools/libraries/creating-libraries#getting-started)

```bash
# library creation
ng new library-example --create-application=true

cd library-example

# **Note**: This step is mandatory to set up ESLint in your Angular project.
ng add @angular-eslint/schematics

"start": "ng serve",
"build": "ng build",
"watch": "ng build --watch --configuration development",
"test": "ng test",
"lint": "ng lint",
```

```bash
# components creation
cd library-example

ng generate library @account-example/component-table
ng generate library @account-example/component-edit

```

```bash
# library scripts
"build-table": "ng build @account-example/component-table",
"dev-table": "ng build @account-example/component-table --watch",
"lint-table": "ng lint @account-example/component-table",
"test-table": "ng test @account-example/component-table",
"publish-table": "npm run build-table & cd dist & cd account-example/component-table & npm publish --access public",

---
