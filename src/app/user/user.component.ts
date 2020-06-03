import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'fai-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }

  users: UserModel[] = []

  getUsers() {
    this.userService.getUsers().subscribe((users: UserModel[]) => {
      this.users = users
    })
  }

}
