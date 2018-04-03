# Uakari - Template Management for Mandrill

Mandrill is a very popular Email Service Provider. Unfortunately it doesn't provide much comfort 
when it comes to managing the email templates.

The goal of this project is to eventually provide features like:
- Localisation (connect to Transifex)
- Template engine (Thymeleaf)
- Version control
- Role-based access control

## Run

mvn spring-boot:run

npm run webpack-watch

docker run -d -p 27017:27017 mongo:3.2

## Dependencies
Install lombok

## Todo
* Ressources in src/webapp folder are hot swapped to the tomcat server, only bundle.js should be available
* package.json/webpcak.config.js should be moved somewhere else