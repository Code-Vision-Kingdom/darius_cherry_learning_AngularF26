import { Component, inject } from '@angular/core';
import { TerrariaListItem, WeaponEvent } from '../terraria-list-item/terraria-list-item';
import { Weapon } from '../shared/models/assignment2';
import { WeaponService} from '../services/weapon';

@Component({
  imports: [TerrariaListItem],
  selector: 'app-terraria-list',
  styleUrl: './terraria-list.scss',
  templateUrl: './terraria-list.html',
})
export class TerrariaList {
  private weaponService = inject(WeaponService);
  weaponList = this.weaponService.weapons;
  meleeWeapons = this.weaponService.meleeWeapons;
  onWeaponOpened(event: WeaponEvent): void {
    console.log(event);
  }
}


