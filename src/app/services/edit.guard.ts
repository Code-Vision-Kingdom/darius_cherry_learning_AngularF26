import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GuardState } from './guard-state';

export const editGuard: CanActivateFn = () => {
  const state = inject(GuardState);
  const router = inject(Router);

  if (state.guardEnabled()) {
    return router.parseUrl('/weapons');
  }

  return true;
};
