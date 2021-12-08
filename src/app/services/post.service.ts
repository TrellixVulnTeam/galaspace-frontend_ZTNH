import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePost } from '../interfaces/create-post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://galaspace-default-rtdb.firebaseio.com/publications.json";
  private storageURL = "https://api.cloudinary.com/v1_1/djldaixtk/image/upload?upload_preset=pcuhg6au";

  constructor(private http: HttpClient,) { }

  createPost(postForm: CreatePost): any {
    return this.http.post(`${this.apiURL}`, postForm);
  }
  //Aditional Methods
  uploadImage(fileForm: FormData): any{
    return this.http.post(`${this.storageURL}`, fileForm);
  }


}
