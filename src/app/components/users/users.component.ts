import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})

export class UsersComponent implements OnInit {

  public users: any;

  constructor(public _userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers() {
    this._userService.getUsers().subscribe(
      res => { this.users = res; }
    );
  }

}
