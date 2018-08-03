import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule,Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
const appRouts:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRouts)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
