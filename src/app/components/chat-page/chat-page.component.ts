import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onScrollDown() {
    this.addItems();
  }

  addItems() {
    this.postService.addMorePost();
  }

}
