import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weapon } from './shared/models/assignment2'; // imports the information from the Assignment2 folder

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss', //Links to the app.scss folder containing the styles that I have set
  templateUrl: './app.html', // Connects to the app.html folder that I have set
})
export class App {
  title = 'Assignment 2 Instructions';

  weaponList: Weapon[] = [
    // Fills in the information that was set on the Assignment2.ts folder
    { id: 1,
      name: 'Ice Blade',
      damage: 100,
      rarity: 'Rare',
      class: 'Melee',
      realItem: true
    },
    {
      id: 2,
      name: 'Muramasa',
      damage: 150,
      rarity: 'Epic',
      class: 'Melee',
      realItem: false
    },
    {
      id: 3,
      name: 'Nights Edge',
      damage: 200,
      rarity: 'Legendary',
      class: 'Melee',
      realItem: true,
    },
    {
      id: 4,
      name: 'Eventide',
      damage: 250,
      rarity: 'Rare',
      class: 'Ranged',
      realItem: false
    },
    {
      id: 5,
      name: 'Nights Edge',
      damage: 300,
      rarity: 'Epic',
      class: 'Ranged',
      realItem: true },
    {
      id: 6,
      name: 'Nights Edge',
      damage: 200,
      rarity: 'Legendary',
      class: 'Ranged',
      realItem: false
    },

  ];
}
