# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.14.

## Architecture

This project follows a modular and scalable architecture using Angular Standalone Components and Services. The main structure is:

- **src/app/**
  - **app.component.ts / app.component.html**: Root component, bootstraps the app and hosts global UI elements like the spinner.
  - **app.config.ts**: Application-wide providers, HTTP interceptors, and router setup.
  - **app.routes.ts**: Centralized route definitions.
  - **common/spinner/**: Global spinner service and component for loading indication.
  - **core/**: Shared services such as API communication (`api.service.ts`), authentication (`auth.service.ts`), guards, and interceptors.
  - **dashboard/**: Dashboard feature module and components.
  - **list/**: List feature module, service, and component for displaying API data.
  - **login/**: Login feature module and component for authentication.

### Key Features

- **Standalone Components**: All major components are standalone for easier reuse and lazy loading.
- **Global Spinner**: Implemented via a service and component, shown during API calls.
- **HTTP Interceptor**: Handles authentication tokens and error messaging globally.
- **Signals**: Angular signals are used for reactive state management in services and components.
- **Material Design**: Uses Angular Material for UI consistency.
- **Authentication**: Cookie-based authentication with route guards.
- **Modular Structure**: Features are separated into their own folders for maintainability.

### Folder Structure

```
src/
  app/
    app.component.*
    app.config.ts
    app.routes.ts
    common/
      spinner/
        spinner.component.ts
        spinner.service.ts
    core/
      api.service.ts
      auth.service.ts
      auth.guard.ts
      auth.interceptor.ts
    dashboard/
      dashboard.component.*
    list/
      list.component.*
      list.service.ts
    login/
      login.component.*
  index.html
  main.ts
  styles.scss
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


##### SAMPLE LOGIN CREDENTIALS
USERNAME --> eve.holt@reqres.in
PASSWORD --> cityslicka