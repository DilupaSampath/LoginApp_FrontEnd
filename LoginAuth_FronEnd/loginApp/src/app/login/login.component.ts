import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
authenticateUser(){
  const user = {
"username":this.username,
"password":this.password
  };
  this.auth.authenticateUser(user).subscribe(data=>{
    if(data.succes){
console.log("Authenticate succesfully");
console.log(data);
this.auth.storeToken(data.token,user);
    }else{
      console.log("Authentication error");
      console.log(data);
    }
  });
}
logOut(){
  this.auth.logOut();
}
}
