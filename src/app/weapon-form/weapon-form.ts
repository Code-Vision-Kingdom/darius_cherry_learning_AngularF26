import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { WeaponService} from '../services/weapon';
import { Weapon } from '../shared/models/assignment2';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-weapon-form',
  styleUrl: './weapon-form.css',
  templateUrl: './weapon-form.html',
})
export class WeaponForm {
  private fb = inject(FormBuilder);
  private service = inject(WeaponService);

  form = this.fb.group({
    name: ['New Weapon', [Validators.required, Validators.minLength(3)]],
    damage: [10, [Validators.required, Validators.min(1)]],
    rarity: ['Rare', Validators.required],
    class: ['Melee'],
    realItem: [true],
  });

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
