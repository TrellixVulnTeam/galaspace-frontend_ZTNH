import { Component, ElementRef, OnInit, ViewChild, AfterViewChecked,DoCheck } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Monami } from 'src/app/interfaces/Monami';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked,DoCheck {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef | undefined;

  
  Lis!: Monami;

  newMessage="";
  mensajes=[];
  messageList:any=[{
    emisor:1,
    message:"Hola !"
  },{
    emisor:"id",
    message:"Hola bro !"
  },{
    emisor:1,
    message:"how are you up to?"
  },{
    emisor:"id",
    message:"living life !"
  },
]


  constructor(public chat:ChatService, private activeRoute: ActivatedRoute) { }


  ngOnInit(): void {
    let iP=this.activeRoute.snapshot.params;
    console.log("parametros",iP['ide'])
  }

  emitSendMessage(){
    let messageInfo={
      newMessage:this.newMessage,
      msjId:1
    };
    if(messageInfo.newMessage==""){
      return;
    }
    this.chat.emitSendMessage(messageInfo);
    this.newMessage=""
  }


  ngAfterViewChecked(){
    this.scrollBottom();
  }
  ngDoCheck(){
    this.scrollBottom();
    console.log("hola")
  }

  scrollBottom():void{
    try{
      this.myScrollContainer!.nativeElement.scrollTop=this.myScrollContainer!.nativeElement.scrollHeight;
    }
    catch(err){}
  }


}
