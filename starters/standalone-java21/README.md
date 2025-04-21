# Java 21 Standalone Swing Starter

Projet standalone Java 21 minimaliste avec une interface graphique (GUI) construite avec **Swing**. Ce projet affiche une fenêtre contenant une liste de réalisateurs célèbres.

## 🎯 Objectifs

- Java 21 (LTS)
- Aucune dépendance externe
- Interface Swing simple
- Exportable en `.jar` exécutable
- Compatible Eclipse (100% sans Maven/Gradle)

## 🧱 Structure du projet

```
standalone-java21/
├── src/
│   └── Main.java         # Point d'entrée avec interface Swing
├── bin/                  # Dossier de compilation (Eclipse)
├── standalone-java21.jar # Fichier JAR exécutable (export Eclipse)
```

## ▶️ Exécution dans Eclipse

1. Clic droit sur `Main.java` → `Run As` → `Java Application`
2. Une fenêtre s’ouvre affichant la liste des réalisateurs

## 🛠️ Création du JAR exécutable

1. Clic droit sur le projet → `Export...`
2. Choisir : `Java > Runnable JAR file`
3. Sélectionner la configuration de lancement (`Main`)
4. Destination : `D:\demo\standalone-java21.jar`
5. **Library handling** : choisir `Package required libraries into generated JAR`
6. Cliquer sur **Finish**

## ▶️ Lancer le JAR depuis le terminal

```bash
java -jar standalone-java21.jar
```

## 📦 Fonctionnalités Swing

- `JFrame` : fenêtre principale
- `JList` : liste des réalisateurs
- `JScrollPane` : défilement
- `invokeLater` : thread safe pour le démarrage GUI

## 🔗 Pré-requis

- JDK 21 installé
- Eclipse avec support JavaSE-21
