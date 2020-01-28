FROM openjdk:11
#copy the WAR file
COPY target/eforms-0.0.1-SNAPSHOT.war eforms.war
ENTRYPOINT ["java","-jar","/eforms.war"]