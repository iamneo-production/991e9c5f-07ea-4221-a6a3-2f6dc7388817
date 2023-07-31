import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RechargeModel } from '../models/recharge-model';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class RechargeService {
<<<<<<< HEAD
    // private  baseUrl = "http://localhost:3000/recharge";
    private  baseUrl = "https://8080-efececbdfeadbdababecfbdcbbefdaddee.project.examly.io/admin/recharge";
=======
    private  baseUrl = "http://localhost:8081/api/admin/recharge";
>>>>>>> a20c35220427166242fbecf9b4fec57e158070e5

  constructor(private httpClient: HttpClient,
    private loginService: LoginService) { }

  name: string = '';
  tab: string ;
  userId: number = this.loginService.getUserId();

  addRecharge(recharge: RechargeModel): Observable<Object> {
    console.log(recharge);
      return this.httpClient.post(`${this.baseUrl}/${this.userId}`, recharge);
  }

  getAllRecharges(): Observable<RechargeModel[]>{
    return this.httpClient.get<RechargeModel[]>(`${this.baseUrl}/${this.userId}`);
  }
}
