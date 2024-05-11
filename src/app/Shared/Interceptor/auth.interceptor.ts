import { inject } from '@angular/core';
import { UserService } from './../../Services/user.service';
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const _userService=inject(UserService)
  if(_userService.isAuthenticated)
  {
   const auth = req.clone({
      headers: req.headers.set('Authorization',`Bearer ${_userService.getToken}`)
    });
    return next(auth);
  }
  return next(req);
};
