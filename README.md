
# Training Notes - 

## 7-Mar-2024 

- Most important concepts in Angular 
Components 
Templates 
Data binding 
Directives 
Decorators 
Routing 
Forms 
Services 
Testing 

--------------------------------------------

### flow of execution - 
-> main.ts 
-> <app.module.ts> 
-> app.component.ts 
-> app.componet.html 
-> index.html 


--------------------------------------------

// generate a new component in the components folder - 

ng generate component components/home

ng generate component components/about 

--------------------------------------------


Component - TypeScript file - home.component.ts 
Template - HTML file - home.component.html 

Data binding 
------------ 

### data binding - 
share data between component and template 

share data from component to template 
1. interpolation {{}} 
- used for rendering data to template 
2. Property binding [] 
- used to work with HTML elements 

share data from template to component 
3. event binding ()

two-way binding 
4. ngModel [()]

### Pipe in Angular 
used for data transfromation in interpolation 
{{firstName | uppercase}}
 (add imports: [CommonModule], in Component decorator )

### Directives in Angular 
used for giving instructions to DOM 

component 
ngModel
*ngIf
*ngFor 
*ngSwitch
ngClass

Products Components 
----------------

ng generate component components/product-list
ng generate component components/product-details

Edit the code. 

### Pass data from parent component to child component

use @Input in child component 
property binding in parent template 

### Pass data from child component to parent component

use @Output in child component 

SMART DUMB Design Pattern 
------------------------- 

SMART component - holds data (product list)
DUMB component - does not hold data (product details)

smart component provides data to dumb component 
dumb componnet renders that data 

---------------------------------- 

### Forms in Angular 

Template driven forms 
Reactive forms 



# DeloitteNgApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
