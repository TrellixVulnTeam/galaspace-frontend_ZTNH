import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { SearchComponent } from './components/search/search.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';
import { FriendsComponent } from './components/friends/friends.component';
import { RequestComponent } from './components/request/request.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGenComponent } from './components/login-gen/login-gen.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './components/post/post.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PostComponent,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    ChatComponent,
    FriendsComponent,
    RequestComponent,
    CreatePostComponent,
    SearchComponent,
    ContactsComponent,
    LoginComponent,
    LoginGenComponent,
    LoginFormComponent,
    RegisterFormComponent

  ],
  imports: [
    HttpClientModule,
    MatSliderModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
