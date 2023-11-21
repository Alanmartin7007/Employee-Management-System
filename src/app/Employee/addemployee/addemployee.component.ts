import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from 'src/app/Department/department.service';
import { Router } from '@angular/router';
import { Department } from 'src/app/Department/department';
import { Gender } from '../gender';
import { __values } from 'tslib';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  form!: FormGroup;
    Listdept!: Department[];
    maleVal!: Gender;
    femaleVal!: Gender;
    genderValue=Gender;

    constructor(private empService: EmployeeService, private router: Router, private deptService: DepartmentService) { }
    ngOnInit(): void {
      this.maleVal = Gender.Male;
      this.femaleVal = Gender.Female
      this.form = new FormGroup({
        id: new FormControl(0),
        name: new FormControl('', Validators.required),
        dateOfBirth: new FormControl('', [Validators.required, this.pastDateValidator.bind(this)]),
        gender: new FormControl(this.maleVal, Validators.required),
        mobileNo: new FormControl('', [Validators.required,this.mobileNumberValidator.bind(this)]),
        email: new FormControl('', [Validators.required, Validators.email, this.emailValidator]),
        salary: new FormControl('', [Validators.required,Validators.min(10000)]),
        departmentId: new FormControl('', Validators.required),
      })
      this.deptService.getList().subscribe(result => {
        this.Listdept = result
      }, err => {
        alert('Error')
        console.log(err)
      })
  
    }
    mobileNumberValidator(control: FormControl): { [key: string]: any } | null {
      const validLength = 10; // Define the valid length for the mobile number
      
      if (control.value && control.value.toString().length !== validLength) {
        return { 'invalidMobileNumber': true }; // Return an error if the length is invalid
      }
      
      return null; // Return null if the validation passes
    }
    
    pastDateValidator(control: FormControl): { [key: string]: any } | null {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
    
      if (selectedDate >= currentDate) {
        return { 'pastDate': true };
      }
      
      return null;
    }
    
    
    emailValidator(control: FormControl): { [key: string]: any } | null {
      const email = control.value as string;
  
      if (email && !email.toLowerCase().endsWith('.com')) {
        return { 'invalidEmail': true };
      }
  
      return null;
    }
  
    submit() {
      console.log(this.form.value)
  
      this.empService.add(this.form.value).subscribe(result => {
        console.log(result)
        alert('Added Succesfuly')
      //navigat
        this.router.navigate(['/employees'])
      }, err => {
        console.log(err)
        alert('Error')
      })
    }
    getGender(gender:number):string{
      return gender===Gender.Male?'Male':'Female';
     }
  }