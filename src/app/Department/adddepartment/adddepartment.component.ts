import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit{
  form!:FormGroup; 
  constructor(private DepartmentService : DepartmentService,private router:Router){

  }
  ngOnInit(): void {
    this.form=new FormGroup({
      id: new FormControl(0),
      name:new FormControl('',Validators.required)
    })
    
  }
  submit(){
    console.log(this.form.value);
    this.DepartmentService.add(this.form.value).subscribe(result=>{
      alert('Added Succesfuly')
      //redirdect to Department
      this.router.navigate(['/departments']);

    },err=>{
      alert('Error')
      console.log(err);
    })

}
}