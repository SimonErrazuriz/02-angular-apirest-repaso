import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

url_api = 'https://jsonplaceholder.typicode.com/users';

  constructor(public _http: HttpClient) { }


getUsers(){
  return this._http.get(this.url_api);
}



}
