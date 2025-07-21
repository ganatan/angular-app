@echo off
IF "%1"=="build" (
  docker build -t backend-springboot .
) ELSE IF "%1"=="run" (
  docker rm -f backend-springboot-container
  docker run -d --name backend-springboot-container -p 8080:8080 backend-springboot
) ELSE IF "%1"=="stop" (
  docker stop backend-springboot-container
) ELSE IF "%1"=="logs" (
  docker logs backend-springboot-container
) ELSE (
  echo Usage: docker-backend-springboot.bat [build|run|stop|logs]
)