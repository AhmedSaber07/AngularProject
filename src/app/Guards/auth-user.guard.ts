import { CanActivateFn, Route, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { inject } from '@angular/core';

export const authUserGuard: CanActivateFn = (route, state) => {
  const _userService = inject(UserService);
  const _route = inject(Router);
  if(!_userService.isAuthenticated)
  {
    _route.navigate(['/Login']);
    return false;
  }
  return true;
};
