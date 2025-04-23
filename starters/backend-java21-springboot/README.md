# backend-java21-sprintgboot



# Compilation
  mvn clean package
  genere le fichier war
  
  
http://localhost:8080/backend-java21-springboot-1.0.0/

http://localhost:8080/backend-java21-springboot-1.0.0/persons
  
  
# Deploiement via Tomcat

Copie du war dans D:\hal\Tomcat 11.0\webapps


Demarrer Tomcat

Executer
http://localhost:8080/
http://localhost:8080/persons


# Deploiement via Jetty


Pom.xml

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

mvn clean compile jetty:run

mvn jetty:run

Executer
http://localhost:8080/backend-java21-maven/


# Tests
mvn clean test
mvn clean test jacoco:report



# Commandes maven
mvn clean
mvn compile
mvn test
mvn package
mvn clean install
mvn validate
mvn dependency:tree