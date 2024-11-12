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
cd library-angular

ng generate library @ganatan-angular/nga-table
ng generate library @ganatan-angular/nga-edit

```

```bash
# library scripts
"build-table": "ng build @ganatan-angular/nga-table",
"dev-table": "ng build @ganatan-angular/nga-table --watch",
"lint-table": "ng lint @ganatan-angular/nga-table",
"test-table": "ng test @ganatan-angular/nga-table",
"publish-table": "npm run build-table & cd dist & cd ganatan-angular/nga-table & npm publish --access public",

---
