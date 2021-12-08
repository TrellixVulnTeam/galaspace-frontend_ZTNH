import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  options = ["home", "people" ,"account_circle", "question_answer"];

  outlined: boolean = false;

  index?: number;

  favorite = "favorite_border";

  constructor() { }

  ngOnInit(): void {
  }

  changeClass(i: number): void {
    this.outlined = !this.outlined;
    this.index = i;
  }

  changeFavorite(): void {
    this.index = -1;
    this.outlined = !this.outlined
    this.outlined ? this.favorite = "favorite" : this.favorite = "favorite_border";
  }

}
