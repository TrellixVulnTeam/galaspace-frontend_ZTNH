import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotAccessOnLoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isUserLogged!: boolean;
      this.authService.checkToken()
      this.authService.isLogged.subscribe( (isLogged: boolean) => {
        isUserLogged = isLogged;
        console.log(isUserLogged);
      });

      this.redirect(isUserLogged)

      console.log("not access login guard -->",isUserLogged);


      return !isUserLogged;
  }

  private redirect(flag: boolean): void {
    if(flag){
      this.router.navigate(['/', 'home']);
    }
  }



}
