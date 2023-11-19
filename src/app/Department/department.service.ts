import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Department } from './department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  apiUrl=`${environment.baseApiUrl}departments`;
  constructor(private client :HttpClient) {}
  getList(): Observable <Department[]>{
    return this.client.get<Department[]>(this.apiUrl);
  }
  add(Dep:Department):Observable<Department>{
    return this.client.post<Department>(this.apiUrl,Dep);
  }
  delete(id:number):Observable<void>{
    return this.client.delete<void>(this.apiUrl +'/'+id);
  }
  update(d:Department):Observable<void>{
    return this.client.put<void>(this.apiUrl +'/'+d.id,d);
  }
  getById(id:number):Observable<Department>{
    return this.client.get<Department>(this.apiUrl +'/'+id);
  }
}
