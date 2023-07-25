import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {userId: number;

  constructor(private httpClient: HttpClient) { }

 setUserId(userId: number){
   this.userId = userId;
 }
 getUserId(): number {
   return this.userId;
 }

  
}
