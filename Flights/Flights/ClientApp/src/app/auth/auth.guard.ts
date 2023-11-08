import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authService.currentUser)
      this.router.navigate(['/register-passenger', { requstedUrl: state.url }])

    return true;
  }
  
}


// If CanActivate Depriciates to non working condition her is back up code


//import { CanActivateFn, Router } from '@angular/router';
//import { AuthService } from '../services/auth.service';
//import { inject } from '@angular/core';

//export const authGuard: CanActivateFn = (route, state) => {

//  const currentUser = inject(AuthService).currentUser;

//  if (!currentUser)
//    inject(Router).navigate(['/register-passenger']);

//  return true;
//};
