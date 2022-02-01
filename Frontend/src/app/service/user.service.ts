import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import baseUrl from './conf';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
//add user
  public newUser(user:User){ 
    return this.http.post(`${baseUrl}/user/`,user)
  }



}
