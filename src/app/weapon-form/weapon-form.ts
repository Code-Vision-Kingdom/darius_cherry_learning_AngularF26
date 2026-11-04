import { Component, computed, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { WeaponService} from '../services/weapon';
import { Weapon } from '../shared/models/assignment2';
import { notBlank, rarityNeedsDamage} from '../shared/validators';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-weapon-form',
  styleUrl: './weapon-form.css',
  templateUrl: './weapon-form.html',
})
export class WeaponForm {
  private fb = inject(FormBuilder);
  private service = inject(WeaponService);
  private router = inject(Router);

  id = input<string>();
  isEdit = computed(() => !!this.id());

  form = this.fb.group({
    name: ['New Weapon', [Validators.required, Validators.minLength(3)]],
    damage: [10, [Validators.required, Validators.min(1)]],
    rarity: ['Rare', Validators.required],
    class: ['Melee'],
    realItem: [true],
  },
    {validators: rarityNeedsDamage });

  constructor() {
    effect(() => {
      const id = this.id();
      if (id) {
        const weapon = this.service.getWeaponById(Number(id));
        if (weapon) {
          this.form.patchValue({
            name: weapon.name,
            damage: weapon.damage,
            rarity: weapon.rarity,
            class: weapon.class,
            realItem: weapon.realItem,
          });
        }
      }
    })
  }
  ngOnInit(): void {
    const id = this.id();
    if (id){
      const weapon = this.service.getWeaponById(Number(id));
      if (weapon) {
        this.form.patchValue({
          name: weapon.name,
          damage: weapon.damage,
          rarity: weapon.rarity,
          class: weapon.class,
          realItem: weapon.realItem,
        });
      }
    }
  }
  onSubmit(): void {
    if (this.form.invalid) return;

    const value = this.form.getRawValue();

    const nextId = Math.max(0, ...this.service.weapons().map((w) => w.id)) + 1;

    this.service.addWeapon({ id: nextId, ...value } as Weapon);

    this.form.reset({
      name: 'New Weapon',
      damage: 10,
      rarity: 'Rare',
      class: 'Melee',
      realItem: true,

    })
  }
}
