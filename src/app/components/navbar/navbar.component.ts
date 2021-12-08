import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  outlinedOne: boolean = false;
  outlinedTwo: boolean = false;
  outlinedThree: boolean = false;
  outlinedFour: boolean = false;
  outlined: boolean = false;
  favorite: string = "favorite_border";

  constructor() { }

  ngOnInit(): void {
  }

  changeFavorite(): void {
    this.outlined = !this.outlined
    this.outlined ? this.favorite = "favorite" : this.favorite = "favorite_border";
  }

}
