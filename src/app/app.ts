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

  assignment2List: Assignment2[] = [
    // Fills in the information that was set on the Assignment2.ts folder
    { id: 1, name: 'Mark', city: 'Windsor', age: 18, friendAge: 1, howManyHouse: false},
    { id: 2, name: 'James', city: 'Toronto', age: 19, friendAge: 'one', howManyHouse: false },
    { id: 3, name: 'Charles', city: 'Ottawa', age: 20, friendAge: 2, howManyHouse: "Yes" },
    { id: 4, name: 'Michael', city: 'Waterloo', age: 21, friendAge: 'two', howManyHouse: "Yes" },
    { id: 5, name: 'Jackson', city: 'Brampton', age: 22, friendAge: 3, howManyHouse: "Yes" },
    { id: 6, name: 'Kaleb', city: 'Chatham', age: 23, friendAge: 'three', howManyHouse: false },
  ];
}
