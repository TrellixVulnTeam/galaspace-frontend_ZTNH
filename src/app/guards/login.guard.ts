import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './../components/login/login.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginGuard implements CanActivate {


  constructor(
    private router: Router,
    private authService: AuthService,
    ){

  }

  private redirect(flag: boolean): void {
    if(!flag){
      this.router.navigate(['/', 'login']);
    }
  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isUserLogged!: boolean;
    this.authService.isLogged.subscribe( (isLogged: boolean) => {
      isUserLogged = isLogged;
    });

    this.redirect(isUserLogged);

    console.log("login guard -->", isUserLogged);


    return isUserLogged;
  }



}
