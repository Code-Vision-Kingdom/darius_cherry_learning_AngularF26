import { Service, signal, computed, effect, inject, Injectable } from '@angular/core';
import { Weapon } from '../shared/models/assignment2';
import { WEAPON_CONFIG } from '../config/weapon.config';

@Injectable()
export class MockWeaponService {
  private config = inject(WEAPON_CONFIG);

  private items = signal<Weapon[]>([
    { id: 1,
      name: 'Test Sword',
      damage: 100,
      rarity: 'Rare',
      class: 'Melee',
      realItem: true
    },
    {
      id: 2,
      name: 'Mock Bow',
      damage: 150,
      rarity: 'Epic',
      class: 'Melee',
      realItem: false,
    },
  ]);

  readonly weapons = this.items.asReadonly();
  addWeapon(newWeapon: Weapon) {
    this.items.update((list) => [...list, newWeapon]);
  }
  removeWeapon(id: number) {
    this.items.update((list) => list.filter((item) => item.id !== id));
  }
  readonly meleeWeapons = computed(() => this.items().filter((weapon) => weapon.class === 'Melee'));
  readonly rangedWeapons = computed(() =>
    this.items().filter((weapon) => weapon.class === 'Ranged'),
  );

  readonly meleeWeaponsCount = computed(() => this.meleeWeapons().length);
  readonly rangedWeaponsCount = computed(() => this.rangedWeapons().length);

  readonly defaultWeapons = computed(() => {
    const category = this.config.defaultType.toLowerCase();

    if (category === 'melee') {
      return this.meleeWeapons();
    }

    if (category === 'ranged') {
      return this.rangedWeapons();
    }

    return this.weapons();
  });

  constructor() {
    effect(() => {
      console.log('Weapon count:', this.items().length);
    });
  }
}
