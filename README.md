# Employee List  
## Overview

This is a simple Angular Single-Page Application that features a list of employees that can be displayed in one component, and updated to add more employees from another component. The form component is displayed/hidden on a button click from the list component. When the list is displayed, simple logic using \*ngIf statements are used to determine eligibility for promotion. Components communicate with each other using @Input/@Output properties to pass data and EventEmitters to call each other's functions.
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Using the Program

* Ensure Nodejs and @angular/cli are both properly installed in your system.  
1. Clone the repository or download the project .zip file and extract its contents.  
2. Open a terminal/command line window and navigate to the root directory of the project.  
3. Enter the command `npm start'.  
4. This will open a new browser tab to `https://localhost:4200/` and will run the application.  

## Key Features

* Single-Page Application:  
One index.html page contains one parent component (fiable-trainee-list). This parent component contains one child component (new-trainee-form). The parent list has a button that shows/hides the child form component. The form can be filled and submitted. A form with any data will successfully submit the new member, update the parent list, and call the parent list's button function to hide the form and reset the button text. A form with no data will simply hide the form and reset parent's button text.
* Component Interaction:  
The parent component "sends" data to the child by including `[dataVariable]="parentVarName"` attributes in the parent component HTML within the child component's tag. The child receives this data with an `@Input` decorator in its Typescript file and may be used along with its other component variables.  
The child accesses the parent's function with an EventEmitter in an `@Output` decorator and emits an event when a certain button is clicked. The parent receives this event by including `(childEvent)="parentFcnName(event)"` attribute within the same child component's tag in the parent's HTML.   
* Form Control:  
User input is read using `[FormControl]="varName"` attributes in the component's input tags and assigning the variables as `new FormControl('')`. Once the input is obtained, their actual values are set to the Trainee's fields with appropriate types by using `this.varName.value` as the argument for the setters.  
* Encapsulation:  
Features object-oriented encapsulation through the use of private variables and getters/setters.

