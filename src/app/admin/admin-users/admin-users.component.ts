import { Component, OnInit } from '@angular/core';
import {UserService} from "../admin-services/user-service.service";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users: any;
  error: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    },
      error => {
      this.error = error;
      });
  }

  onNewUser() {

  }

  onDeleteUser(u: any) {

  }

  onEditCategory(u: any) {

  }
}
