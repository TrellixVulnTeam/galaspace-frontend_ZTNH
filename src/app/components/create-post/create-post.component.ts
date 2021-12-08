import { PostService } from '../../services/post.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreatePost } from './../../interfaces/create-post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit { 
  image?: File | null;
  preview?: string | ArrayBuffer | null;
  imageForm = new FormData();
  postForm = this.fb.group({
    content: ['', Validators.required],
  });
  post: CreatePost = {
    content: '',
    image: '',
  };
  imageURL?: string;
  @ViewChild('inputPost') private inputPost!: ElementRef;


  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit(): void {}

  captureFile(event: any) {
    this.image = event.target.files[0];
    this.getBase64(this.image!);
  }

  deletePhoto(): void {
    this.image = null;
    this.preview = null;
  }

  setValuesPostForm(): void {
    this.post.content = this.postForm.get('content')!.value;
    this.post.image = this.image == null ? "" : this.imageURL;
  }

  cleanUI(): void {
    this.image == null;
    this.postForm.patchValue({'content': ""});
    this.inputPost.nativeElement.style.height = '50px'
    this.deletePhoto();
  }

  createPost(): void {
    this.setValuesPostForm();
    this.postService.createPost(this.post!).subscribe(
      (response: CreatePost) => {
        console.log(response);
        this.cleanUI();
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
    if(this.image != null){
      this.createPostWithImage();
    }else {
      this.createPost();
    }
  }





















  //Aditional Methods
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
}
