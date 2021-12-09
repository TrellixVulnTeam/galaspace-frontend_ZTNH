import { FormControl, Validators } from '@angular/forms';
import { Post } from './../../interfaces/post';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';


export interface Comment {
  profile_picture: string;
  name: string;
  body: string,    
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

export class PostComponent implements OnInit {
  @ViewChild('scrollModal') private myScrollContainer: ElementRef | undefined;

  @Input()
  isMine!: boolean;
  @Input()
  isLoved?: boolean;

  posts: Post[] = [];
  lovedPost: number[] = [];
  comments: any[] = [
    {
      profile_picture:
        'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
      name: 'Name of contact',
      body: `Adipisicing aliquip proident enim amet officia nulla laborum deserunt nisi cupidatat dolor aute. Adipisicing est aliqua nostrud excepteur cillum amet incididunt sint id velit nulla excepteur amet. Occaecat ullamco non voluptate ullamco ex deserunt proident Lorem dolor sint cillum qui esse officia. Laboris aliqua pariatur enim sint in proident non aute esse. Aute minim aliqua dolore esse fugiat est laborum aliquip dolore in. Labore velit aliquip commodo excepteur eu sunt cillum elit fugiat excepteur. Amet commodo velit labore minim qui irure.`,
    },
    {
      profile_picture:
        'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
      name: 'Name of contact',
      body: `Adipisicing aliquip proident enim amet officia nulla laborum deserunt nisi cupidatat dolor aute. Adipisicing est aliqua nostrud excepteur cillum amet incididunt sint id velit nulla excepteur amet. Occaecat ullamco non voluptate ullamco ex deserunt proident Lorem dolor sint cillum qui esse officia. Laboris aliqua pariatur enim sint in proident non aute esse. Aute minim aliqua dolore esse fugiat est laborum aliquip dolore in. Labore velit aliquip commodo excepteur eu sunt cillum elit fugiat excepteur. Amet commodo velit labore minim qui irure.`,
    },
    {
      profile_picture:
        'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
      name: 'Name of contact',
      body: `Adipisicing aliquip proident enim amet officia nulla laborum deserunt nisi cupidatat dolor aute. Adipisicing est aliqua nostrud excepteur cillum amet incididunt sint id velit nulla excepteur amet. Occaecat ullamco non voluptate ullamco ex deserunt proident Lorem dolor sint cillum qui esse officia. Laboris aliqua pariatur enim sint in proident non aute esse. Aute minim aliqua dolore esse fugiat est laborum aliquip dolore in. Labore velit aliquip commodo excepteur eu sunt cillum elit fugiat excepteur. Amet commodo velit labore minim qui irure.`,
    },
    {
      profile_picture:
        'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
      name: 'Name of contact',
      body: `Adipisicing aliquip proident enim amet officia nulla laborum deserunt nisi cupidatat dolor aute. Adipisicing est aliqua nostrud excepteur cillum amet incididunt sint id velit nulla excepteur amet. Occaecat ullamco non voluptate ullamco ex deserunt proident Lorem dolor sint cillum qui esse officia. Laboris aliqua pariatur enim sint in proident non aute esse. Aute minim aliqua dolore esse fugiat est laborum aliquip dolore in. Labore velit aliquip commodo excepteur eu sunt cillum elit fugiat excepteur. Amet commodo velit labore minim qui irure.`,
    },
  ];

  
  body = new FormControl('', Validators.required);

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  ngDoCheck() {
    console.log(this.comments);
    console.log(this.comments.length);
  }

  loadPosts(): void {
    this.posts = this.postService.getPosts();
  }

  reloadPost(): void {
    this.postService.addMorePost();
  }

  loved(i: number) {
    this.lovedPost.push(i);
  }

  deletePost(i: any) {
    let index = this.posts.indexOf(i);
    this.posts.splice(index, 1);
  }

  sendComment(): void {
    let commentTmp: Comment = {
      profile_picture: "https://i.pinimg.com/564x/47/89/37/478937760d6ee8218729f32b7255f070.jpg",
      name: "My name",
      body: this.body.value,
    }
    this.comments.unshift(commentTmp);
    this.body.patchValue('');
  }
  scrollBottom():void{
    try{
      this.myScrollContainer!.nativeElement.scrollTop=this.myScrollContainer!.nativeElement.scrollHeight;
    }
    catch(err){}
  }
}

