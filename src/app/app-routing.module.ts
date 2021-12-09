import { FavouritesPageComponent } from './components/favourites-page/favourites-page.component';
import { MessagesPageComponent } from './components/messages-page/messages-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { ProfileFriendComponent } from './components/profile-friend/profile-friend.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGenComponent } from './components/login-gen/login-gen.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ChatComponent } from './components/chat/chat.component';
import { FriendsComponent } from './components/friends/friends.component';
import { RequestComponent } from './components/request/request.component';
import { LoginGuard } from './guards/login.guard';
import { NotAccessOnLoginGuard } from './guards/notaccessonlogin.guard';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

const routes: Routes = [
  {path: 'login', component: LoginGenComponent, pathMatch: 'full', canActivate: [NotAccessOnLoginGuard]},
  {path: 'register', component: LoginGenComponent, pathMatch: 'full', canActivate: [NotAccessOnLoginGuard]},
  {path: 'reenviar-email', component: LoginGenComponent, pathMatch: 'full', canActivate: [NotAccessOnLoginGuard]},
  {path: 'forgot-password', component: LoginGenComponent, pathMatch: 'full', },
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path:'chat/:ide',component:ChatPageComponent, canActivate: [LoginGuard]},
  {path:'friends',component: ContactsPageComponent, canActivate: [LoginGuard]},
  {path:'request',component:RequestComponent, canActivate: [LoginGuard]},
  {path: 'profile', component: ProfilePageComponent, canActivate: [LoginGuard]},
  {path: 'person', component: ProfileFriendComponent, canActivate: [LoginGuard]},
  {path: 'friends', component: ContactsPageComponent, canActivate: [LoginGuard]},
  {path: 'messages', component: MessagesPageComponent, canActivate: [LoginGuard]},
  {path: 'favourites', component: FavouritesPageComponent, canActivate: [LoginGuard]},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
