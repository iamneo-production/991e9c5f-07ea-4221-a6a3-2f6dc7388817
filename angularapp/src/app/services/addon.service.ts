import { Injectable } from '@angular/core';
import { Addon } from '../models/addon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddonService {
  addonurl="https://8080-eeeabfbfadbabcbefbffdababecfbdcbbefdaddee.project.examly.io/api/admin/addon";

constructor(private httpClient: HttpClient) { }

getAllAddonPlans(): Observable<Addon[]>{
  return this.httpClient.get<Addon[]>(`${this.addonurl}`);
}

addAddonPlan(addon: Addon): Observable<Object>{
  return this.httpClient.post(`${this.addonurl}`, addon);
}

getAddonPlanById(id: number): Observable<Addon>{
  console.log(id);
  return this.httpClient.get<Addon>(`${this.addonurl}/${id}`);
}

editAddonPlan(id: number, addon: Addon): Observable<any>{
  return this.httpClient.put(`${this.addonurl}/${id}`, addon);
}

deleteAddonPlan(id: number): Observable<any>{
  console.log('deleted');
  return this.httpClient.delete(`${this.addonurl}/${id}`);
}
}
