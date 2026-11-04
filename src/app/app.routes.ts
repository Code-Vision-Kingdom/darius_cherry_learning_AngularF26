import { Routes } from '@angular/router';
import {TerrariaList} from './terraria-list/terraria-list';
import {WeaponDetail} from './weapon-detail/weapon-detail';
import {WeaponForm} from './weapon-form/weapon-form';

export const routes: Routes = [
  { path: '', redirectTo: 'weapons', pathMatch: 'full' },
  { path: 'weapons', component: TerrariaList },
  { path: 'weapons/:add', component: WeaponForm },
  { path: 'weapons/edit/:id', component: WeaponForm },
  { path: 'weapons/:id', component: WeaponDetail },
];
