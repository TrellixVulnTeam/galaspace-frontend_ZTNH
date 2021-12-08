import { FavouritesPageComponent } from './components/favourites-page/favourites-page.component';
import { MessagesPageComponent } from './components/messages-page/messages-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { ProfileFriendComponent } from './components/profile-friend/profile-friend.component';
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
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'person', component: ProfileFriendComponent},
  {path: 'friends', component: ContactsPageComponent},
  {path: 'messages', component: MessagesPageComponent},
  {path: 'favourites', component: FavouritesPageComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
