import {InjectionToken} from '@angular/core';

export interface WeaponConfig {
  apiBaseUrl: string;
  defaultCity: string;
}

export const WEAPON_CONFIG = new InjectionToken<WeaponConfig>('weapon.config');


