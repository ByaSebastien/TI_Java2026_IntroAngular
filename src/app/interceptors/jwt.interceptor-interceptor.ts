import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);

  if (authService.connectedUser()) {
    let headers = new HttpHeaders();

    let clone = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.connectedUser()?.accessToken}`,
      },
    });

    return next(clone);
  }
  return next(req);
};
