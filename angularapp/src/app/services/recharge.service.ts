import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RechargeModel } from '../models/recharge-model';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class RechargeService {
    // private  baseUrl = "http://localhost:3000/recharge";
    private  baseUrl = "http://localhost:8081/api/admin/recharge";

  constructor(private httpClient: HttpClient,
    private loginService: LoginService) { }

  name: string = '';
  tab: string ;
  userId: number = this.loginService.getUserId();

  addRecharge(recharge: RechargeModel): Observable<Object> {
      return this.httpClient.post(`${this.baseUrl}/${this.userId}`, recharge);
  }

  getAllRecharges(): Observable<RechargeModel[]>{
    return this.httpClient.get<RechargeModel[]>(`${this.baseUrl}/${this.userId}`);
  }
}
