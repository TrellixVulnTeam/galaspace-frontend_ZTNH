import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGenComponent } from './components/login-gen/login-gen.component';
import { LoginGuard } from './guards/login.guard';
import { NotAccessOnLoginGuard } from './guards/notaccessonlogin.guard';

const routes: Routes = [
  {path: 'login', component: LoginGenComponent, pathMatch: 'full', canActivate: [NotAccessOnLoginGuard]},
  {path: 'register', component: LoginGenComponent, pathMatch: 'full', canActivate: [NotAccessOnLoginGuard]},
  {path: 'reenviar-email', component: LoginGenComponent, pathMatch: 'full', canActivate: [NotAccessOnLoginGuard]},
  {path: 'forgot-password', component: LoginGenComponent, pathMatch: 'full', canActivate: [LoginGuard]},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'profile', component: ProfilePageComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
