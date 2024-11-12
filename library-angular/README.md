# Angular Library

## Creation

```bash
# library creation
ng new library-angular --create-application=true

cd library-angular

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
cd library-exangularample

ng generate library @ganatan/nga-table
ng generate library @ganatan/nga-edit

```

```bash
# library scripts
"build-table": "ng build @ganatan/nga-table",
"dev-table": "ng build @ganatan/nga-table --watch",
"lint-table": "ng lint @ganatan/nga-table",
"test-table": "ng test @ganatan/nga-table",
"publish-table": "npm run build-table & cd dist & cd ganatan/nga-table & npm publish --access public",

---
