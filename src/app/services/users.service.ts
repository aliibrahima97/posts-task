import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  doGet() {
    return this.http.get<Users[]>(`https://jsonplaceholder.typicode.com/users`)
  }

}
