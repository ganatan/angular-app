# backend-java

Java 21 web application packaged as a WAR, without Spring, using Servlet API + JAX-RS (Jakarta EE), deployable on Tomcat , with Checkstyle, unit tests, and Maven build.

---

## Updates (Dependency Updates)

Check outdated dependencies

```bash
mvn versions:display-dependency-updates
mvn versions:display-plugin-updates
```


---

## 🔧 Lint (Static Analysis)

Run Checkstyle to enforce code style rules:

```bash
mvn checkstyle:check
```

⛔️ Build fails if code does not comply with `checkstyle.xml`.

---

## 🧪 Unit Tests

Run tests and generate JaCoCo coverage report:

```bash
mvn clean test
mvn jacoco:report
```

Coverage report generated at:

```
target/site/jacoco/index.html
```

---

## 🏗️ Build (WAR)

Compile, test, and package as a WAR file:

```bash
mvn clean install
```

Generates:

```
target/backend-java-1.0.0.war
```

---

## 🚀 Deployment on Tomcat (Production)

1. Copy the WAR file to:

```
<tomcat-path>/webapps
```

2. Start Tomcat

3. Access the application:

- [http://localhost:8080/backend-java-1.0.0/](http://localhost:8080/backend-java-1.0.0/)
- [http://localhost:8080/backend-java-1.0.0/persons](http://localhost:8080/backend-java-1.0.0/persons)

---


## 📦 Useful Maven Commands

```bash
mvn clean
mvn compile
mvn verify
mvn package

mvn test
mvn install
mvn checkstyle:check
mvn dependency:tree
mvn clean test
mvn jacoco:report
```

---

## ✅ Production Summary

```bash
mvn clean install
cp target/backend-java-1.0.0.war <TOMCAT_PATH>/webapps
# Start Tomcat
```

Application available at:

```
http://<server>:8080/backend-java-1.0.0/
```

