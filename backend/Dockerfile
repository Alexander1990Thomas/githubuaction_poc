# Use Java runtime
FROM eclipse-temurin:17-jdk-jammy

# Create app directory
WORKDIR /app

# Copy jar file
COPY target/*.jar app.jar

# Expose port
EXPOSE 8080

# Run application
ENTRYPOINT ["java","-jar","app.jar"]