import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})
export class MessagesPageComponent implements OnInit {

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
