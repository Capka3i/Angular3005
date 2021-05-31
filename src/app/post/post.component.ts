import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../service/post.service";
import {Post} from "../Interface/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:Post
  constructor() { }

  ngOnInit(): void {

  }

}
