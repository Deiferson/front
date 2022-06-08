import { Component } from '@angular/core';

interface users {
  id: number;
  name: string;
  email:string;
}

const USERS: users[] = [
  {
    id: 1,
    name: 'Ana',
    email: 'ana@gmail.com'
  },  
  {
    id: 1,
    name: 'Ana',
    email: 'ana@gmail.com'
  },  
  {
    id: 1,
    name: 'Ana',
    email: 'ana@gmail.com'
  },  
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = USERS;
}
