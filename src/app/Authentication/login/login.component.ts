import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponseDto } from '../login-response-dto';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  loginResponse!:LoginResponseDto
  constructor(private authService:AuthService,private router:Router){}
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)
    })
  }
  empLogin(){
    this.authService.login(this.loginForm.value).subscribe(result=>{
        this.loginResponse=result
        //console.log(this.loginResponse)
        this.router.navigate(['/departments'])
    },err=>{
      console.log(err)
      alert('Error')
    })
  }

}
