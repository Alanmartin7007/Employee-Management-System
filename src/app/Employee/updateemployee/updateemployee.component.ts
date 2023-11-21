import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Department/department';
import { DepartmentService } from 'src/app/Department/department.service';
import { DatePipe } from '@angular/common';
import { Gender } from '../gender';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent  implements OnInit{
  genderValue=Gender;
  constructor( private EmpService : EmployeeService,
    private route:ActivatedRoute,
    private router:Router,private DepService:DepartmentService ,private dtPipe :DatePipe){}
    list:Department[]=[];
    EmpId:number=0;
    form!:FormGroup;
    maleVal: any;
    employee1!:Employee;
  ngOnInit(): void {
    this.EmpId = this.route.snapshot.params['id'];
    console.log(this.EmpId)
 
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl(Gender.Male, Validators.required),
      mobileNo: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      salary: new FormControl('', Validators.required),
      departmentId: new FormControl('', Validators.required),
    })

//service method
this.EmpService.getById(this.EmpId).subscribe(c => {
console.log(c);
this.employee1 = c;

this.DepService.getList().subscribe(result=>{
  this.list=result
},err=>{
  console.log(err)
  alert('Error')
})


this.form.setValue({

      id: this.employee1.id,
      name: this.employee1.name,
      dateOfBirth: this.dtPipe.transform(this.employee1.dateOfBirth,'yyyy-MM-dd'),
      gender:this.employee1.gender,
      mobileNo: this.employee1.mobileNo,
      email: this.employee1.email,
      salary: this.employee1.salary,
      departmentId: this.employee1.departmentId,
});
}, err => {
console.log(err);
alert('error');
});

 

  }
  getGender(gender:number):string{
    return gender===Gender.Male?'Male':'Female';
   }
     
  submit() {
    this.EmpService.update(this.form.value).subscribe(()=>
      {
        alert('Updated Successfully');
        //navigate to product lsit
        this.router.navigate(['/employees']);

      },err=>{
        console.log(err);
        alert('error');
      })
    }



}
