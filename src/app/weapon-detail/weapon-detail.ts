import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WeaponService} from '../services/weapon';

@Component({
  imports: [RouterLink],
  selector: 'app-weapon-detail',
  styleUrl: './weapon-detail.css',
  templateUrl: './weapon-detail.html',
})
export class WeaponDetail {
  private service = inject(WeaponService);

  id = input<string>();
  weapon = computed(() => this.service.getWeaponById(Number(this.id())));
}
