import { UserService } from './user.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //users: User[] = [];
  displayedColumns = ['id', 'name', 'email'];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }    

  createProduct(): void {
    let user = {
      'name': 'teste',
      'email': 'teste@gmail.com'
    }
    this.userService.create(user).subscribe(() => {
    })

  }

}
