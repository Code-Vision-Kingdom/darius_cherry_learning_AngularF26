import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weapon } from './shared/models/assignment2';
import {TerrariaList} from './terraria-list/terraria-list'; // imports the information from the Assignment2 folder

@Component({
  imports: [RouterOutlet, TerrariaList],
  selector: 'app-root',
  styleUrl: './app.scss', //Links to the app.scss folder containing the styles that I have set
  templateUrl: './app.html', // Connects to the app.html folder that I have set
})
export class App {
  terraria = input.required<TerrariaList>()
}
