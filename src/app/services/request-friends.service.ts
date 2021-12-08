import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestFriendsService {

  URL='https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }

  getFriendsRequest(){
    return this.http.get(this.URL);
  }

  addFriend(ide:number):Observable<any>{
    return this.http.post<any>(`${this.URL}`,JSON.stringify(ide));
  }

  deleteFriend(ide:number):Observable<any>{
    return this.http.delete<any>(`${this.URL}`);
  }

}
