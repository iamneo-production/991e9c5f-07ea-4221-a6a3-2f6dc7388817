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
<<<<<<< HEAD
    private  baseUrl = "http://localhost:8081/api/admin/recharge";
=======
    private  baseUrl = "https://8080-eeeabfbfadbabcbefbffdababecfbdcbbefdaddee.project.examly.io/admin/recharge";
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13

  constructor(private httpClient: HttpClient,
    private loginService: LoginService) { }

  name: string = '';
  tab: string ;
  userId: number = this.loginService.getUserId();

  addRecharge(recharge: RechargeModel): Observable<Object> {
<<<<<<< HEAD
=======
    console.log(recharge);
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
      return this.httpClient.post(`${this.baseUrl}/${this.userId}`, recharge);
  }

  getAllRecharges(): Observable<RechargeModel[]>{
    return this.httpClient.get<RechargeModel[]>(`${this.baseUrl}/${this.userId}`);
  }
}
