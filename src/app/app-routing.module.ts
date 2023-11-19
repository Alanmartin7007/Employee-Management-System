import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentComponent } from './Department/list-department/list-department.component';
import { AdddepartmentComponent } from './Department/adddepartment/adddepartment.component';
import { UpdatedepartmentComponent } from './Department/updatedepartment/updatedepartment.component';
import { ListemployeeComponent } from './Employee/listemployee/listemployee.component';
import { AddemployeeComponent } from './Employee/addemployee/addemployee.component';
import { UpdateemployeeComponent } from './Employee/updateemployee/updateemployee.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'departments',component:ListDepartmentComponent},
  {path:'departments/add',component:AdddepartmentComponent},
  {path:'departments/edit/:id',component:UpdatedepartmentComponent},
  {path:'employees',component:ListemployeeComponent}
  ,{path:'employees/add',component:AddemployeeComponent},
  {path:'employees/edit/:id',component:UpdateemployeeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
