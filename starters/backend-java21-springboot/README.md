# backend-java21-springboot

## Compilation

```bash
mvn clean package
```
Génère le fichier WAR : `target/backend-java21-springboot-1.0.0.war`

Accès local après démarrage :
- [http://localhost:8080/backend-java21-springboot-1.0.0/](http://localhost:8080/backend-java21-springboot-1.0.0/)
- [http://localhost:8080/backend-java21-springboot-1.0.0/persons](http://localhost:8080/backend-java21-springboot-1.0.0/persons)

---

## Déploiement avec Tomcat

1. Copier le fichier WAR dans :  
   `D:\hal\Tomcat 11.0\webapps`
2. Démarrer Tomcat
3. Accéder aux URLs :
   - [http://localhost:8080/](http://localhost:8080/)
   - [http://localhost:8080/persons](http://localhost:8080/persons)

---

## Déploiement avec Jetty

Ajouter dans `pom.xml` :

```xml
<build>
  <plugins>
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
  </plugins>
</build>
```

Démarrer Jetty :

```bash
mvn clean compile jetty:run
# ou simplement :
mvn jetty:run
```

Accéder à :
- [http://localhost:8080/backend-java21-maven/](http://localhost:8080/backend-java21-maven/)

---

## Linter

```bash
mvn checkstyle:check
```

---


## Tests

```bash
mvn clean test
mvn clean test jacoco:report
```

---

## Commandes Maven utiles

```bash
mvn clean
mvn compile
mvn test
mvn package
mvn clean install
mvn validate
mvn dependency:tree
```