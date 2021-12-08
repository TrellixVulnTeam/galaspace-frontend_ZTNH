import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGenComponent } from './components/login-gen/login-gen.component';

const routes: Routes = [
  {path: 'login', component: LoginGenComponent, pathMatch: 'full'},
  {path: 'register', component: LoginGenComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
