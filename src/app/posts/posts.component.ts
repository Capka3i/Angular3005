import {Component, OnInit} from '@angular/core';
import {PostService} from "../service/post.service";
import {Post} from "../Interface/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]

  constructor(private postclient: PostService) {
  }

  ngOnInit(): void {
    this.postclient.getPost().subscribe(value => this.posts=value)
  }

}
