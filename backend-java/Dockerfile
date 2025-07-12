# Étape 2 : image d’exécution minimale
FROM eclipse-temurin:21-jdk-jammy

# Répertoire de travail
WORKDIR /app

# Copie du jar
COPY target/*.jar app.jar

# Port exposé
EXPOSE 8080

# Variables d’environnement (optionnel)
ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=80.0"

# Entrypoint clair, compatible avec JAVA_OPTS
ENTRYPOINT exec java $JAVA_OPTS -jar app.jar
