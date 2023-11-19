import { Component } from '@angular/core';
import { AuthService } from './Authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMS PORTAL SPERIDIAN';
  constructor(private Auth:AuthService,private router : Router){
    Auth.logout();
   
}
isloggedin():boolean{
  return this.Auth.isloggedin();
}
logout(){
  this.Auth.logout();
}
}
