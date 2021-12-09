import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToChat(ident:number){
    this.router.navigate(['chat',ident])
    
  }
}
