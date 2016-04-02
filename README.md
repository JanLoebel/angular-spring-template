# Angular-Spring-Template

This is a basic example how to combine [Spring Boot](https://github.com/spring-projects/spring-boot), together with [AngularJs](https://github.com/angular) and [Gulp](https://github.com/gulpjs/gulp). The project is inspired and based on the projects [jhipster](https://github.com/jhipster/generator-jhipster) and [generator-hottowel](https://github.com/johnpapa/generator-hottowel). Please feel free to give me your feedback, recommendations or ask some questions.


## Installation

_Prerequisites:_ You must have installed [npm](https://github.com/npm/npm) and [Bower](https://github.com/bower/bower).

1. Clone git repository: ``git clone ...``
1. Execute Maven build: ``./mvnw clean package -Pprod``
1. Download gulp build dependencies: ``npm install``
1. Download UI dependencies: ``bower install``

## Maven Profiles

* ``mvnw``
  * Runs "spring-boot:run" as default goal to compile and start the backend-application.


* ``mvnw clean package -Pprod``
  * Build the "production war" therefore, it will run ``gulp build`` and package everything together.


## Important Gulp Goals

* ``gulp serve``
  * Build the 'development'-version and start BrowserSync to reload changes live in the browser.


* ``gulp build``
  * Build the 'production'-version with minified and optimized styles, HTML, images, etc.


## Start
After building with ``mvn clean package -Pprod`` the war-file you can easily start it via ``java -jar angular-spring-template-0.0.1-SNAPSHOT.war --spring.profiles.active=prod``

## Open Points
* Testing: Using [Karma](https://karma-runner.github.io/) and [Protractor](https://angular.github.io/protractor/) for testing
* Include your feedback, recommendation, tips, and tricks.

## Contribution
If you find any bug or if you have a feature-request, feedback or recommendations please don't hesitate to use the [issue-tracker](https://github.com/JanLoebel/angular-spring-template/issues). **Pull**-requests are always welcome.

## References
This project is inspired and based on:
* [JHipster](https://github.com/jhipster/generator-jhipster)
* [Generator-Hottowel](https://github.com/johnpapa/generator-hottowel)


## License

Angular-Spring-Template

Copyright (C) 2016 Jan Löbel

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
