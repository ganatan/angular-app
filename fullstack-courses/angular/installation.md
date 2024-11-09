
# Angular Installation

## Installation 

- [Check Angular Releases](https://github.com/angular/angular/releases)

```bash
# uninstallation
npm uninstall -g @angular/cli

# Installation
npm install -g @angular/cli
npm install -g @angular/cli@18.2.10

# Check version
ng --version

# Creation
ng new angular-starter

# Checko dependencies
npm outdated

npm list --depth=0

```
---


## SSR & PWA

```bash
# PWA Installation
ng add @angular/pwa

# SSR installation
ng add @angular/ssr

# Change scripts
  "scripts": {
    "serve": "node dist/angular-starter/server/server.mjs"

```
---

