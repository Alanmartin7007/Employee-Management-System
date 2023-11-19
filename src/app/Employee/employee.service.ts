import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl=`${environment.baseApiUrl}employees`;
  constructor(private client:HttpClient) { }
  getList(): Observable <Employee[]>{
    return this.client.get<Employee[]>(this.apiUrl);
  }
  add(e:Employee):Observable<Employee>{
    return this.client.post<Employee>(this.apiUrl,e);
  }
  delete(id:number):Observable<void>{
    return this.client.delete<void>(this.apiUrl +'/'+id);
  }
  update(d:Employee):Observable<void>{
    return this.client.put<void>(this.apiUrl +'/'+d.id,d);
  }
  getById(id:number):Observable<Employee>{
    return this.client.get<Employee>(this.apiUrl +'/'+id);
  }
}
