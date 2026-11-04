import { Routes } from '@angular/router';
import {TerrariaList} from './terraria-list/terraria-list';
import {WeaponDetail} from './weapon-detail/weapon-detail';

export const routes: Routes = [
  {path: '', redirectTo: 'weapons', pathMatch: 'full'},
  {path: 'weapons', component: TerrariaList },
  {path: 'weapons/:id', component: WeaponDetail},
];
