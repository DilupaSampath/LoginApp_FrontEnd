import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }
  onRegister() {
    console.log(this.name);
    const user = {
      "name": this.name,
      "email": this.email,
      "username": this.username,
      "password": this.password
    };
    console.log(user);
    this.authService.registerUser(user).subscribe(data=>{
      if(data.succes){
this.router.navigate(['/login']);
console.log("Registerd");
      }else{
        console.log("Failed");
        console.log(data);
      }
    });
  }
}
