import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registerclass } from '../models/registerclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginurl = "https://8080-bafdbdecabebcdababecfbdcbbefdaddee.project.examly.io/api/user/login";
  private registerurl="https://8080-bafdbdecabebcdababecfbdcbbefdaddee.project.examly.io/api/user/signup";
  
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
