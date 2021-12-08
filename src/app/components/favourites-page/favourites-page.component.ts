import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.css']
})
export class FavouritesPageComponent implements OnInit {

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
