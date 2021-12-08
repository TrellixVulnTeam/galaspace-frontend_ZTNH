import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messageInfo="";
  chats:any=[];

  constructor(private socket:SocketService) { 
    this.onReceivedMessage();
  }

  emitSendMessage(messageInfo: any){
    this.chats.push(messageInfo); 
    this.socket.io.emit("sendMessage",messageInfo);
  }

  onReceivedMessage(){
    this.socket.io.on("receivedMessage",(messageInfo)=>{
      messageInfo.msjId = 2;
      this.chats.push(messageInfo);
    })
  }
}
