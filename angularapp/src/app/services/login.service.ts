import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
import { Registerclass } from '../models/registerclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginurl = "http://localhost:8081/api/user/login";
  private registerurl="http://localhost:8081/api/user/signup";

   constructor(private httpClient: HttpClient) { }

   addRegister(registerclass: Registerclass): Observable<any>{
    return this.httpClient.post(`${this.registerurl}`, registerclass);
  }

   addLogin(registerclass: Registerclass): Observable<any>{
    return this.httpClient.post(`${this.loginurl}`, registerclass);
  }
}
