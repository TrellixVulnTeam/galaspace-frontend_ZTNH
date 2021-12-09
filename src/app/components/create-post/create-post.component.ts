import { Post } from './../../interfaces/post';
import { PostService } from '../../services/post.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit { 
  @ViewChild('inputPost') private inputPost!: ElementRef;
  image?: File | null;
  preview?: string | ArrayBuffer | null;
  imageForm = new FormData();
  postForm = this.fb.group({
    content: ['', Validators.required],
  });
  post: Post = {
    name: "My name",
    picture_profile: "https://i.pinimg.com/564x/47/89/37/478937760d6ee8218729f32b7255f070.jpg",
    content: "",
    picture_post: "",
    comments_quantity: 0,
  };
  imageURL?: string;
  showPostButton = true;
  newPost: Post = {
    name: "",
    picture_profile: "",
    content: "",
    comments_quantity: 0,
    picture_post: "",
  };


  constructor(private fb: FormBuilder, private postService: PostService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  captureFile(event: any) {
    this.image = event.target.files[0];
    this.getBase64(this.image!);
  }

  deletePhoto(): void {
    this.image = null;
    this.preview = null;
    this.imageURL = "";
  }

  setValuesPostForm(): void {
    this.post.content = this.postForm.get('content')!.value;
    this.post.picture_post = this.image == null ? "" : this.imageURL;
  }

  cleanUI(): void {
    this.image == null;
    this.postForm.patchValue({'content': ""});
    this.inputPost.nativeElement.style.height = '50px'
    this.deletePhoto();
  }

  /* showAlert(): void {
    Swal.fire({
      title: 'Publicación hecha!',
      text: 'Sigue navegado...',
      icon: 'success',
      confirmButtonText: 'Acpetar'
    });
  } */

  setNewPost(): void {
    this.newPost = {
      name: "My name",
      picture_profile: "https://i.pinimg.com/564x/47/89/37/478937760d6ee8218729f32b7255f070.jpg",
      comments_quantity: 0,
      content: this.post.content = this.postForm.get('content')!.value,
      picture_post: this.imageURL,
    }
    this.postService.posts.unshift(this.newPost);

  }

  createPost(): void {
    this.setValuesPostForm();
    this.postService.createPost(this.post!).subscribe(
      () => {
        this.setNewPost(),
        this.cleanUI();
        this.openSnackBar();
        this.showPostButton = true;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  createPostWithImage(): void {
    if (this.image != null) {
      this.imageForm.append('file', this.image != null ? this.image : '');
      this.postService
        .uploadImage(this.imageForm)
        .subscribe((response: any) => {
          this.imageURL = response.secure_url;
          this.createPost();
        });
    }
  }

  onSubmit(): void {
    this.showPostButton = false;
    if(this.image != null){
      this.createPostWithImage();
    }else {
      this.createPost();
    }
    console.log(this.postService.posts);
    
    
  }





















  //Aditional Methods22
  getBase64(file: File): void {
    let context = this;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      context.preview = reader.result;
    };
  }

  autoGrowTextZone(e: any) {
    e.target.style.height = '0px';
    e.target.style.height = e.target.scrollHeight + 25 + 'px';
  }

  autoDeleteGrowTextZone(e: any) {
    if (e.target.value.length == 1) {
      e.target.style.height = '50px';
    }
  }
  openSnackBar() {
    this._snackBar.open("Publicación realizada", "Aceptar", {panelClass: ['custom-snackbar']
  });
  }
}
