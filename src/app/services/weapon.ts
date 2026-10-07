import { Service, signal, computed, effect } from '@angular/core';
import { Weapon} from '../shared/models/assignment2';

@Service()
export class WeaponService {
  private items = signal<Weapon[]>([
    { id: 1, name: 'Ice Blade', damage: 100, rarity: 'Rare', class: 'Melee', realItem: true },
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
      name: 'Zenith',
      damage: 200,
      rarity: 'Legendary',
      class: 'Ranged',
      realItem: false,
    },
  ]);

  readonly weapons = this.items.asReadonly();
  addWeapon(newWeapon: Weapon) {
    this.items.update((list) => [...list, newWeapon]);
  }
  readonly meleeWeapons = computed(() => this.items().filter((weapon) => weapon.class === 'Melee'));

  constructor() {
    effect(() => {
      console.log('Weapon count:', this.items().length);
    });
  }

}
