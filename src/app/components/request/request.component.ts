import { Component, OnInit } from '@angular/core';
import { RequestFriendsService } from 'src/app/services/request-friends.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  request:any=[];

  constructor(private requestService: RequestFriendsService) { }

  ngOnInit(): void {
    this.getRequest();
  }


  getRequest(){
    this.requestService.getFriendsRequest().subscribe(r=>{
      this.request=r;
      console.log(this.request)
    })
  }

  acceptFriend(ide:number){
    this.requestService.addFriend(ide);
    //remove of friends list
    console.log(ide);
  }

  declineFriend(ide:number){
    const requests = this.getRequest()
    this.requestService.deleteFriend(ide).subscribe();
    console.log(requests);
  }

}
