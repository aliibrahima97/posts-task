import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  user:Users[] = []
  
  total:number = 0

  constructor(private getUsers:UsersService) { }

  ngOnInit(): void {
    this.getUsers.doGet().subscribe(users =>{
      this.user = users
      this.total = this.user.length
    })
  }

}
