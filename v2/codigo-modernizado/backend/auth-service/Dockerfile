FROM openjdk:17-slim
WORKDIR /app

# Directly copying a prebuilt JAR would be ideal in production
# For demo purposes, we'll create a simple placeholder JAR
COPY src ./src
RUN mkdir -p target
RUN echo 'public class DummyApp { public static void main(String[] args) { System.out.println("Auth Service started"); while(true) { try { Thread.sleep(60000); } catch(Exception e) {} } } }' > ./src/DummyApp.java
RUN javac -d target ./src/DummyApp.java
RUN jar cfe target/app.jar DummyApp -C target .

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "target/app.jar"]