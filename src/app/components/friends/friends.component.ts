import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Monami } from 'src/app/interfaces/Monami';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private chatServ: ChatService, private router: Router) { }

  lista=[
    {
      ide:4
    },{
      ide:5
    }
  ]

  ngOnInit(): void {
    console.log("identificador",this.lista)
  }

  enviar(id:number){
    let ide = id;
    this.chatServ.lista.push(ide)
    console.log(this.chatServ.lista)
  }

  goToChat(ident:number){
    let iden: Monami;
    iden = this.lista[ident]
    this.router.navigate(['chat',iden.ide])
    console.log(iden.ide)
  }

}
