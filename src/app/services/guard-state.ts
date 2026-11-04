import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class GuardState {
  guardEnabled = signal(true);

  toggle(): void {
    this.guardEnabled.update((value) => !value);
  }
}
