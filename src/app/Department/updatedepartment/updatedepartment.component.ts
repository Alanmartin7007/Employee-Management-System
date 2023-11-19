import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatedepartment',
  templateUrl: './updatedepartment.component.html',
  styleUrls: ['./updatedepartment.component.css']
})
export class UpdatedepartmentComponent implements OnInit {
  constructor( private DepartmentService : DepartmentService,
    private route:ActivatedRoute,
    private router:Router){}
    DepartmentId:number=0;
    form!:FormGroup;
    department1!:Department;
  ngOnInit(): void {
    this.DepartmentId=this.route.snapshot.params['id'];
    console.log('product id '+this.DepartmentId);
    this.form=new FormGroup({
      
        id: new FormControl(0),
        name:new FormControl('',Validators.required)
    })

    
    this.DepartmentService.getById(this.DepartmentId).subscribe(p=>{
      console.log(p);
      this.department1=p;
      this.form.setValue({
        id:this.department1.id,
        name : this.department1.name,
       
  
      });
    },err=>{
      alert('error');
      console.log(err);
    })
  }
  submit() {
    this.DepartmentService.update(this.form.value).subscribe(()=>
      {
        alert('Updated Successfully');
        //navigate to product lsit
        this.router.navigate(['/departments']);

      },err=>{
        console.log(err);
        alert('error');
      })
    }



}
