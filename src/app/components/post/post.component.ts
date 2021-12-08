import { Post } from './../../interfaces/post';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  isMine!: boolean;

  posts: Post[] = [];
  lovedPost: number[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.posts = this.postService.getPosts();    
  }

  reloadPost(): void {
    this.postService.addMorePost();
  }

  loved(i: number){
    this.lovedPost.push(i);    
  }
 

}
