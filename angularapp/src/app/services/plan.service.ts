import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

    // private baseUrl="http://localhost:3000/planModel";
    private baseUrl="https://8080-bdfdaedcfbcfecedababecfbdcbbefdaddee.project.examly.io/admin/plan";
    constructor(private httpClient: HttpClient) { }
  
    getAllPlans(): Observable<Plan[]>{
      return this.httpClient.get<Plan[]>(`${this.baseUrl}`);
    }
    addPlan(plan: Plan): Observable<Object>{
      // console.log(postpaid);
      return this.httpClient.post(`${this.baseUrl}`, plan);
    }
    getPlanById(id:number):Observable<Plan>{
      return this.httpClient.get<Plan>(`${this.baseUrl}/${id}`);
    }
    editPlan(id:number,plan:Plan):Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`,plan);
    }
    deletePlan(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }
}
