import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile-friend',
  templateUrl: './profile-friend.component.html',
  styleUrls: ['./profile-friend.component.css']
})
export class ProfileFriendComponent implements OnInit {

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
