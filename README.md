# AngularFire

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# TO-DO-APP

Implemented with Firebase and angular, in order to generate a task you must be registered, it has guardians that do not allow access to the crud if you are not
logged in

# CRUD

The crud is with a button to add a new task, a button to delete and another to edit, at the time of starting the edition a modal opens in which the task can be
edited and for the changes to take place it must be given in the save button

# LOGIN-REGISTER

The to-do App enters Login if you do not have an account you must enter to register to create an account at the time of registration it will give a confirmation 
alert and will take you to the part of the crud at once, in the crud it has a button to close The session, if it is not closed, it will remain open, given the case
that if you have an account you only have to log in, if any field is wrong it will report an alert, if it is effective it will take you to the crud part and you 
will be able to view the tasks you have
