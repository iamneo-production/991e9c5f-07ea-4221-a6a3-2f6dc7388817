import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registerclass } from '../models/registerclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
<<<<<<< HEAD
  private loginurl = "http://localhost:8081/api/user/login";
  private registerurl="http://localhost:8081/api/user/signup";

   constructor(private httpClient: HttpClient) { }
=======
  private loginurl = "https://8080-eeeabfbfadbabcbefbffdababecfbdcbbefdaddee.project.examly.io/api/user/login";
  private registerurl="https://8080-eeeabfbfadbabcbefbffdababecfbdcbbefdaddee.project.examly.io/api/user/signup";
  
   constructor(private httpClient: HttpClient) { }
   userId: number;

   setUserId(userId: number){
     this.userId = userId;
   }
   getUserId(): number {
     return this.userId;
  }
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13

   addRegister(registerclass: Registerclass): Observable<any>{
    return this.httpClient.post(`${this.registerurl}`, registerclass);
  }

   addLogin(registerclass: Registerclass): Observable<any>{
    return this.httpClient.post(`${this.loginurl}`, registerclass);
  }
<<<<<<< HEAD

  userId: number;

  setUserId(userId: number){
    this.userId = userId;
  }
  getUserId(): number {
    return this.userId;
 }
=======
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
}
