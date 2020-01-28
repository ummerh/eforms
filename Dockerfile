FROM openjdk:11
#copy the JAR file
COPY target/eforms-0.0.1-SNAPSHOT.jar eforms.jar
ENTRYPOINT ["java","-jar","/eforms.jar"]

