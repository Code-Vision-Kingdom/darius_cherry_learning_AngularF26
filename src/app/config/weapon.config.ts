import {InjectionToken} from '@angular/core';

export interface WeaponConfig {
  apiBaseUrl: string;
  defaultType: string;
}

export const WEAPON_CONFIG = new InjectionToken<WeaponConfig>('weapon.config');


