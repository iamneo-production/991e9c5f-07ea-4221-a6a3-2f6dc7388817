import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registerclass } from '../models/registerclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
<<<<<<< HEAD
  private loginurl = "https://8080-efececbdfeadbdababecfbdcbbefdaddee.project.examly.io/api/user/login";
  private registerurl="https://8080-efececbdfeadbdababecfbdcbbefdaddee.project.examly.io/api/user/signup";
  
  
=======
  getUserId(): number {
    throw new Error('Method not implemented.');
  }
  private loginurl = "http://localhost:8081/api/user/login";
  private registerurl="http://localhost:8081/api/user/signup";

>>>>>>> a20c35220427166242fbecf9b4fec57e158070e5
   constructor(private httpClient: HttpClient) { }
   userId: number;

   setUserId(userId: number){
     this.userId = userId;
   }
   getUserId(): number {
     return this.userId;
  }

   addRegister(registerclass: Registerclass): Observable<any>{
    return this.httpClient.post(`${this.registerurl}`, registerclass);
  }

   addLogin(registerclass: Registerclass): Observable<any>{
    return this.httpClient.post(`${this.loginurl}`, registerclass);
  }
}
