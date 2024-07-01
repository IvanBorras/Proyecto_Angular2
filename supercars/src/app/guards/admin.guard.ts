import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService)
  const authService = inject(AuthService)


  if(authService.isUserAdmin()){
    return true
  }
  else{
    return false
  }
};