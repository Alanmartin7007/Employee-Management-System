import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Gender } from '../gender';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
  private  empid=0;
  list:Employee[]=[];
  constructor(private EmpService:EmployeeService){}

  ngOnInit(): void {
    this.EmpService.getList().subscribe(result=>{
      console.log(result);
      this.list=result;
    },err=>{
      console.log(err);
      alert(err);
    })
  }

delete() {
  console.log('Department to delete:'+ this.empid);
      this.EmpService.delete(this.empid).subscribe(()=>{
        alert('delete successful');
        this.ngOnInit();
      },err=>{
        console.log(err);
        alert('error');
      })}
setEmployeeId(id: number) {
  this.empid=id;
}
getGender(gender:number):string{
  return gender===Gender.Male?'Male':'Female';
 }
   
}
