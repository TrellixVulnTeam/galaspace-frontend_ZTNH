import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserCreated } from './../interfaces/user-created';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { Login } from '../interfaces/login';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = environment.apiURL;
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  signUp(formSignUp: FormData) {
    return this.http.post<UserCreated>(`${this.apiURL}register`, formSignUp);
  }

  login(formLogin: Login): Observable<any> {
    return this.http.post(`${this.apiURL}login`, formLogin).pipe(
      map((_response: any) => {
        //console.log(_response);

        this.saveToken(_response.token.token);
        // this.user = _response.user;
        // this.saveUserData(this.user);
        // this.dataUser.next(this.user);
        return _response;
      })
    );
  }



  getUserData() {
    return this.http.get<any>(`${this.apiURL}getUserData`);
  }

  updateProfile() {
    return this.http.get<any>(`${this.apiURL}update`);
  }

  logout(): void {
    localStorage.removeItem('token_login');
    localStorage.removeItem('user')
    this.loggedIn.next(false);
  }


/*   checkToken(): void {

    const existTokenLogin = this.cookieService.check('token_login');
    // existTokenLogin ? this.loggedIn.next(true) : this.logout();
    if(existTokenLogin){
      this.loggedIn.next(true)
      console.log("Si hay token");
      let token = this.cookieService.get('token_login');
      this.validateToken(token.toString()).subscribe( _res => {
        console.log("Si entra al sub");
        if(_res.status == true){
          this.loggedIn.next(_res.status)
          console.log("Si es valido el token");
        }else{
          console.log("No es valido el token");
          this.logout();
        }
      });
    }else{
      console.log("No hay token");
      this.logout();
    }

  } */

  validateToken(token: string){
    const headers = new HttpHeaders({
      "authorization": `Bearer ${token}`,
    });
    return this.http.post<any>(`${this.apiURL}checkToken`, null ,{headers: headers});
  }

  saveToken(token: string): void {
    localStorage.setItem('token_login', token);
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }








}
