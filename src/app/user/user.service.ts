import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:5000/user";

  constructor(private http: HttpClient) {}

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    alert("erro");
    return EMPTY;
  } 
}