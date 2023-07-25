import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanModel } from '../models/plan-model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

    // private baseUrl="http://localhost:3000/planModel";
    private baseUrl="https://8080-babdbceaaedaaecdababecfbdcbbefdaddee.project.examly.io/admin/plan";
    constructor(private httpClient: HttpClient) { }
  
    getAllPlans(): Observable<PlanModel[]>{
      return this.httpClient.get<PlanModel[]>(`${this.baseUrl}`);
    }
    addPlan(plan: PlanModel): Observable<Object>{
      // console.log(postpaid);
      return this.httpClient.post(`${this.baseUrl}`, plan);
    }
    getPlanById(id:number):Observable<PlanModel>{
      return this.httpClient.get<PlanModel>(`${this.baseUrl}/${id}`);
    }
    editPlan(id:number,plan:PlanModel):Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`,plan);
    }
    deletePlan(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }
}
