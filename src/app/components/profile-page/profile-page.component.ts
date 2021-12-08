import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

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
