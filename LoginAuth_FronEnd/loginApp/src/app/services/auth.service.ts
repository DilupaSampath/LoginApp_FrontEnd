import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
user:any;
authToken:any;
  constructor(private http:Http) { }
registerUser(user){
// console.log(user);
let headers = new Headers();
headers.append('Content-Type','application/json');
return this.http.post('http://localhost:3000/users/register',user,{headers:headers}).
map(res=>res.json());
}

authenticateUser(user){
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers}).
  map(res=> res.json());
}
storeToken(token,user){
  localStorage.setItem('id_token',token);
  localStorage.setItem('user',JSON.stringify(user));
  this.authToken=token;
  this.user=user;
}
logOut(){
  this.authToken=null;
  this.user=null;
  localStorage.clear();
}
}
