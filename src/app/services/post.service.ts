import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://galaspace-default-rtdb.firebaseio.com";
  private storageURL = "https://api.cloudinary.com/v1_1/djldaixtk/image/upload?upload_preset=pcuhg6au";

  posts: Post[] = [];
  addPosts: Post[] = [
    {
      picture_profile: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
      name: "Name of contact",
      comments_quantity: 10,
      content: ``,
      picture_post: "https://cdn2.vogue.es/uploads/images/thumbs/es/vog/2/s/2020/23/billie_eilish_3285_620x.jpg"
    },
    {
      picture_profile: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
      name: "Name of contact",
      comments_quantity: 10,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ex sed libero sodales, ac mattis quam sodales. Ut fringilla mollis risus, vel ultrices libero pulvinar quis. Cras libero tellus, tempor sed laoreet ut, sodales sagittis mi. Suspendisse viverra, mi eu egestas sodales, mauris lectus tempus lacus, id auctor sapien tortor vitae tortor. Nunc vestibulum, lorem ac congue luctus, elit sem malesuada neque, at sodales mi magna quis leo. Nam fringilla eget augue sed venenatis. Aenean maximus feugiat lectus eu pulvinar. Phasellus in semper mi, et volutpat nisi. Quisque at fermentum nisi, congue fringilla magna. Curabitur convallis sapien sit amet mauris ornare eleifend. Cras tristique mollis massa id fringilla. Integer vestibulum a nunc ac egestas. Sed cursus neque metus, vitae interdum libero feugiat vitae. Nullam feugiat id ipsum id sollicitudin.`,
      picture_post: "https://indiehoy.com/wp-content/uploads/2020/09/the-killers.jpg"
    },
    {
      picture_profile: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
      name: "Name of contact",
      comments_quantity: 10,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ex sed libero sodales, ac mattis quam sodales. Ut fringilla mollis risus, vel ultrices libero pulvinar quis. Cras libero tellus, tempor sed laoreet ut, sodales sagittis mi. Suspendisse viverra, mi eu egestas sodales, mauris lectus tempus lacus, id auctor sapien tortor vitae tortor. Nunc vestibulum, lorem ac congue luctus, elit sem malesuada neque, at sodales mi magna quis leo. Nam fringilla eget augue sed venenatis. Aenean maximus feugiat lectus eu pulvinar. Phasellus in semper mi, et volutpat nisi. Quisque at fermentum nisi, congue fringilla magna. Curabitur convallis sapien sit amet mauris ornare eleifend. Cras tristique mollis massa id fringilla. Integer vestibulum a nunc ac egestas. Sed cursus neque metus, vitae interdum libero feugiat vitae. Nullam feugiat id ipsum id sollicitudin.`,
      picture_post: "https://imagenes.expreso.ec/files/image_700_402/uploads/2021/07/15/60f0cd27c5091.png"
    },
    {
      picture_profile: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
      name: "Name of contact",
      comments_quantity: 10,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ex sed libero sodales, ac mattis quam sodales. Ut fringilla mollis risus, vel ultrices libero pulvinar quis. Cras libero tellus, tempor sed laoreet ut, sodales sagittis mi. Suspendisse viverra, mi eu egestas sodales, mauris lectus tempus lacus, id auctor sapien tortor vitae tortor. Nunc vestibulum, lorem ac congue luctus, elit sem malesuada neque, at sodales mi magna quis leo. Nam fringilla eget augue sed venenatis. Aenean maximus feugiat lectus eu pulvinar. Phasellus in semper mi, et volutpat nisi. Quisque at fermentum nisi, congue fringilla magna. Curabitur convallis sapien sit amet mauris ornare eleifend. Cras tristique mollis massa id fringilla. Integer vestibulum a nunc ac egestas. Sed cursus neque metus, vitae interdum libero feugiat vitae. Nullam feugiat id ipsum id sollicitudin.`,
      picture_post: "https://img.discogs.com/2VhESVhgOGm3e6G5YQIeXg6txsw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-82730-1419714988-9675.jpeg.jpg"
    },
  ];

  constructor(private http: HttpClient) { }

  createPost(postForm: Post): any {
    return this.http.post(`${this.apiURL}/posts.json`, postForm);
  }
  //Aditional Methods
  uploadImage(fileForm: FormData): any{
    return this.http.post(`${this.storageURL}`, fileForm);
  }

  setPost(post: Post){
    this.posts.push(post);
  }

  getPosts(): Post[]{
    this.http.get(`${this.apiURL}/posts.json`).subscribe( (res: any) =>{
      let keys = Object.keys(res);
      keys.forEach(( _, i) => {
        let postTmp = res[keys[i]];
        this.posts.push(postTmp);
      });
      
    }); 
    return this.posts;
  }

  addMorePost(): void {
    this.addPosts.forEach( (value) => {
        this.posts.push(value);
    });
  }


}
