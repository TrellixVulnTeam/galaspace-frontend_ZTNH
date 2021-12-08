import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService) {}
  ngOnInit(): void {}

  onScrollDown() {
    this.addItems();    
  }

  addItems() {
    this.postService.addMorePost();
  }


}
