import { Component, input, output } from '@angular/core';
import { Weapon } from '../shared/models/assignment2';

export interface WeaponEvent {
  id: number;
  action: 'opened' | 'favorite';
}

@Component({
  imports: [],
  selector: 'app-terraria-list-item',
  styleUrl: './terraria-list-item.scss',
  templateUrl: './terraria-list-item.html',
})
export class TerrariaListItem {
  item = input.required<Weapon>();
  expanded = false;
  opened = output<WeaponEvent>();

  toggle(): void {
    this.opened.emit({
      id: this.item().id,
      action: 'opened',
    });
  }
}
