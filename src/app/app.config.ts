import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { WEAPON_CONFIG } from './config/weapon.config';
import { MockWeaponService } from './services/mock-weapon.service';
import { WeaponService } from './services/weapon';



export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes),
    {
      provide: WEAPON_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultType: 'all',
      },
    },
    {
      provide: WeaponService,
      useClass: MockWeaponService
    }],
};
