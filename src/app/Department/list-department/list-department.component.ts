import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit{

  list:Department[]=[];
  constructor(private DepartmentService:DepartmentService){}
  private  departmentid=0; 
  ngOnInit(): void {
        this.DepartmentService.getList().subscribe(result=>{
          console.log(result);
          this.list=result;
        },err=>{
          console.log(err);
          alert(err);
        })
  }
 
delete(){
      console.log('Department to delete:'+ this.departmentid);
      this.DepartmentService.delete(this.departmentid).subscribe(()=>{
        alert('delete successful');
        this.ngOnInit();
      },err=>{
        console.log(err);
        alert('error');
      })
    }
    setDepartmentId(id: number){
      this.departmentid=id;
    }  
}
