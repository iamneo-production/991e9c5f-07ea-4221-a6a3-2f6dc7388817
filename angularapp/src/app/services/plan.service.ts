import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanModel } from '../models/plan-model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private baseUrl="http://localhost:8081/api/admin/plan";
  constructor(private httpClient: HttpClient) { }

  getAllPlans(): Observable<PlanModel[]>{
    return this.httpClient.get<PlanModel[]>(`${this.baseUrl}`);
  }
  addPlan(planModel: PlanModel): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, planModel);
  }
  getPlanById(id:number):Observable<PlanModel>{
    return this.httpClient.get<PlanModel>(`${this.baseUrl}/${id}`);
  }
  editPlan(id:number,postpaid:PlanModel):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,postpaid);
  }
  deletePlan(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
