# backend-springboot

Application Spring Boot packagée en WAR, compatible Tomcat / Jetty, avec linter, tests, build Maven.

---

## 📊 Updates (Dependency Updates)

Check outdated dependencies and plugins:

```bash
mvn versions:display-dependency-updates
mvn versions:display-plugin-updates
```

---

## 🔧 Lint (analyse statique)

Analyse du style de code Java avec Checkstyle :

```bash
mvn checkstyle:check
```

⛔️ La build échoue si le code ne respecte pas les règles définies dans `checkstyle.xml`.

---

## 🧪 Tests unitaires

Exécution des tests + génération du rapport JaCoCo :

```bash
mvn clean test
mvn jacoco:report
```

Rapport de couverture généré dans :

```
target/site/jacoco/index.html
```

---

## 🏗️ Build

Compilation + tests + packaging + installation locale :

```bash
mvn clean install
```

Génère le fichier :

```
target/backend-springboot-1.0.0.war
```

---

## 🚀 Déploiement local (Tomcat)

1. Copier le fichier WAR dans :

```
<chemin-vers-tomcat>/webapps
```

2. Démarrer Tomcat

3. Accéder à l'application :

- http://localhost:8080/backend-springboot-1.0.0/
- http://localhost:8080/backend-springboot-1.0.0/persons

---

## 🌐 Déploiement Jetty (optionnel)

Ajoute dans `pom.xml` :

```xml
<plugin>
  <groupId>org.eclipse.jetty</groupId>
  <artifactId>jetty-maven-plugin</artifactId>
  <version>11.0.25</version>
  <configuration>
    <webApp>
      <contextPath>/</contextPath>
    </webApp>
  </configuration>
</plugin>
```

Puis exécute :

```bash
mvn clean compile jetty:run
# ou simplement :
mvn jetty:run
```

Accès local :
- http://localhost:8080/backend-springboot/

---

## 📦 Commandes Maven utiles

```bash
mvn clean
mvn compile
mvn test
mvn package
mvn install
mvn checkstyle:check
mvn dependency:tree
```

## 📦 Commandes Java utiles

```bash
java -jar target/backend-springboot-1.0.0.jar
```




