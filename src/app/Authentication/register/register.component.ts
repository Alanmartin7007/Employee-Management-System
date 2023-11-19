import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Roles } from '../roles';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm!:FormGroup

  constructor(private authService:AuthService,private router:Router){}
  ngOnInit(): void {
    this.regForm=new FormGroup({
      id:new FormControl(0),
      userName:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      role:new FormControl(Roles.Admin,Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
  regEmp(){
    this.authService.register(this.regForm.value).subscribe(()=>{
      this.router.navigate([''])
    },err=>{
      console.log(err)
      alert('Error')
    })
  }
}
