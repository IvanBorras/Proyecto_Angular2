import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


export const AdminGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService)
  if(cookieService.check('admin')){
    return true
  }
  else{
    return false
  }

};


