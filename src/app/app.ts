import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Assignment2 } from './shared/models/assignment2'; // imports the information from the Assignment2 folder

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss', //Links to the app.scss folder containing the styles that I have set
  templateUrl: './app.html', // Connects to the app.html folder that I have set
})
export class App {
  title = 'Assignment 2 Instructions';

  assignment2List: Assignment2[] = [ // Fills in the information that was set on the Assignment2.ts folder
    { id: 1, name: 'Mark', city: 'Windsor', age: 18, friendAge: true, howManyHouse: "one" },
    { id: 2, name: 'James', city: 'Toronto', age: 19, friendAge: false,},
    { id: 3, name: 'Charles', city: 'Ottawa', age: 20, friendAge: true, howManyHouse: 1},
  ];
}
