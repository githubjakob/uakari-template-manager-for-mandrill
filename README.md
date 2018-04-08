# Uakari - Template Management for Mandrill

Mandrill is a very popular Email Service Provider. Unfortunately it doesn't provide much comfort 
when it comes to managing the email templates. This projects wants to jump in here:

The idea is that users manage and compile the Templates using Uakari and then publish them to Mandrill. Like this
Uakari acts as a service between the User and Mandrill. We keep one template per language and live email in Mandrill 
and still call the Mandrill API directly to send the emails.

Eventually Uakari can provide features like:
- Localisation: Move text strings out of the templates into a spreadsheet (maybe connect to Transifex later)
- Template engine: Reuse components of the templates using Thymeleaf
- Version control: Keep a history of the changed templates and allow restoring old versions
- Role-based access control: Restrict access for specific users

## Alternative approaches
Mandrill supports [Handlebars for dynamic content](https://mandrill.zendesk.com/hc/en-us/articles/205582537-Using-Handlebars-for-Dynamic-Content)
 It requires you to provide the dynamic content with every API call.
 
There are also services that work as a proxy for Mandrill: You call their API and request sending an email, the service
itself will call Mandrill and deliver the email.

## Run

Run the project with Maven: 

mvn spring-boot:run

Use webpack to automatically rebuild the js:

npm run webpack-watch

Use docker for a MongoDB:

docker run -d -p 27017:27017 mongo:3.2

## Dependencies
Install lombok in your IDE

## Used Technologies
    
* Spring Boot
* React (trying to make use of the Flux pattern)
* Webpack with Babel
* Maven (frontend-maven-plugin allows to bundle the JS during the build)
