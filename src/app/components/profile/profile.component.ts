import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  isMine!: boolean;

  showFriends = false;
  showButtonRequest = false;

  constructor(private postService: PostService, private authService: AuthService, private router: Router) { }

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

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
