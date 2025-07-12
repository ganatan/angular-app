@echo off
IF "%1"=="build" (
  docker build -t backend-java .
) ELSE IF "%1"=="run" (
  docker rm -f backend-java-container
  docker run -d --name backend-java-container -p 8080:8080 backend-java
) ELSE IF "%1"=="stop" (
  docker stop backend-java-container
) ELSE IF "%1"=="logs" (
  docker logs backend-java-container
) ELSE (
  echo Usage: docker-backend-java.bat [build|run|stop|logs]
)