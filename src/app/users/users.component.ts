import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {subscribeTo} from "rxjs/internal-compatibility";
import {UserService} from "../service/user.service";
import {User} from "../Interface/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users:User[];


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(value => this.users = value)
  }

}
