import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = {
    picture_profile: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
    name: "Name of friend",
    picture_post: "https://laplumaestilograficablog.files.wordpress.com/2017/06/glumseme1.jpg",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed finibus ex sed libero sodales, ac mattis quam sodales. 
    Ut fringilla mollis risus, vel ultrices libero pulvinar quis. 
    Cras libero tellus, tempor sed laoreet ut, sodales sagittis mi. 
    Suspendisse viverra, mi eu egestas sodales, mauris lectus tempus lacus, 
    id auctor sapien tortor vitae tortor. Nunc vestibulum, lorem ac congue luctus, 
    elit sem malesuada neque, at sodales mi magna quis leo. Nam fringilla eget augue sed venenatis. 
    Aenean maximus feugiat lectus eu pulvinar. Phasellus in semper mi, et volutpat nisi. 
    Quisque at fermentum nisi, congue fringilla magna. 
    Curabitur convallis sapien sit amet mauris ornare eleifend. 
    Cras tristique mollis massa id fringilla. Integer vestibulum a nunc ac egestas. Sed cursus neque metus, 
    vitae interdum libero feugiat vitae. Nullam feugiat id ipsum id sollicitudin.`,
    comments_quantity: 9,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
