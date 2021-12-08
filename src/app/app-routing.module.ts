import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGenComponent } from './components/login-gen/login-gen.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ChatComponent } from './components/chat/chat.component';
import { FriendsComponent } from './components/friends/friends.component';
import { RequestComponent } from './components/request/request.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginGenComponent, pathMatch: 'full'},
  {path: 'register', component: LoginGenComponent, pathMatch: 'full'},
  {path:'chat/:ide',component:ChatComponent},
  {path:'friends',component:FriendsComponent},
  {path:'request',component:RequestComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
