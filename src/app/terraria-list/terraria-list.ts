import { Component } from '@angular/core';
import { Weapon } from '../shared/models/assignment2';

@Component({
  imports: [],
  selector: 'app-terraria-list',
  styleUrl: './terraria-list.css',
  templateUrl: './terraria-list.html',
})
export class TerrariaList {

  weaponList: Weapon[] = [
    // Fills in the information that was set on the Assignment2.ts folder
    { id: 1,
      name: 'Ice Blade',
      damage: 100,
      rarity: 'Rare',
      class: 'Melee',
      realItem: true },
    {
      id: 2,
      name: 'Muramasa',
      damage: 150,
      rarity: 'Epic',
      class: 'Melee',
      realItem: false,
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
      realItem: false,
    },
    {
      id: 5,
      name: 'Nights Edge',
      damage: 300,
      rarity: 'Epic',
      class: 'Ranged',
      realItem: true,
    },
    {
      id: 6,
      name: 'Nights Edge',
      damage: 200,
      rarity: 'Legendary',
      class: 'Ranged',
      realItem: false,
    },
  ];
}

