import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginResponseDto } from './login-response-dto';
import { User } from './user';
import { UserDto } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl=`${environment.baseApiUrl}auth`;

  constructor(private client:HttpClient) { }
register(u:User):Observable<User>{
  return this.client.post<User>(this.apiUrl,u);
}
login(user:User):Observable<LoginResponseDto>{
  let res=this.client.post<LoginResponseDto>(this.apiUrl+'/login',user);
  res.subscribe(response=>{
    localStorage.clear();
     localStorage.setItem('userDetails',JSON.stringify(response));
    
  },err=>{
    return  null;
  })
  return res;
}
getUser():LoginResponseDto{
  let user =localStorage.getItem('userDetails');
  return JSON.parse(user ||'{}');
}
isloggedin():boolean{
  return localStorage.getItem('userDetails')!= null? true:false
}
logout(){
  localStorage.clear();
}
}