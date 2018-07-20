import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { IUsers } from './../users';

@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.css']
})
export class JsondataComponent implements OnInit {
  users;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe((response)=> {
      this.users = response;
    },
    (error)=> {
      console.error(error);
    })
  }
}