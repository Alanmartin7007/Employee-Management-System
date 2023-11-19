import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDepartmentComponent } from './Department/list-department/list-department.component';
import { AdddepartmentComponent } from './Department/adddepartment/adddepartment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatedepartmentComponent } from './Department/updatedepartment/updatedepartment.component';
import { ListemployeeComponent } from './Employee/listemployee/listemployee.component';
import { AddemployeeComponent } from './Employee/addemployee/addemployee.component';
import { DatePipe } from '@angular/common';
import { UpdateemployeeComponent } from './Employee/updateemployee/updateemployee.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { TokenInterceptor } from './Authentication/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ListDepartmentComponent,
    AdddepartmentComponent,
    UpdatedepartmentComponent,
    ListemployeeComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    LoginComponent,
    
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
