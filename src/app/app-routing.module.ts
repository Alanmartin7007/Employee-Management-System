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
import { routeAuthGuard } from './Authentication/route-auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'departments',component:ListDepartmentComponent,canActivate:[routeAuthGuard]},
  {path:'departments/add',component:AdddepartmentComponent,canActivate:[routeAuthGuard]},
  {path:'departments/edit/:id',component:UpdatedepartmentComponent,canActivate:[routeAuthGuard]},
  {path:'employees',component:ListemployeeComponent,canActivate:[routeAuthGuard]}
  ,{path:'employees/add',component:AddemployeeComponent,canActivate:[routeAuthGuard]},
  {path:'employees/edit/:id',component:UpdateemployeeComponent,canActivate:[routeAuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
