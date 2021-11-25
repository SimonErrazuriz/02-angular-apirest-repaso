import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

url_api = 'https://reqres.in/api/users';

  constructor(public _http: HttpClient) { }


getUsers(){
  return this._http.get(this.url_api);
}



}
