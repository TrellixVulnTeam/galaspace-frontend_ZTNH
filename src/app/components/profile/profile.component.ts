import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private postService: PostService) { }

  showFirstTab = true;
  showSecondTab = false;

  ngOnInit(): void {
  }
  onScrollDown() {
    this.addItems();
  }

  addItems() {
    this.postService.addMorePost();
  }

  setTabPosition(index: number){
    if(index == 0){
      this.showSecondTab = false;
      this.showFirstTab = true;
    }
    if(index == 1){
      this.showFirstTab = false;
      this.showSecondTab = true;
    }
  }

}
