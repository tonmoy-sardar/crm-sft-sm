import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  httpHeaderOptions: any;
  
  constructor(
    private http: HttpClient
  ) {
    this.httpHeaderOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
  }

  addLead(data: any): Observable<any> {
    return this.http.post(environment.apiEndpointCRM + 'lead_create/', data, this.httpHeaderOptions);
  }

  getCountryList(): Observable<any>{
    return this.http.get(environment.apiEndpoint + 't_core_country_add_or_list/', this.httpHeaderOptions);
  }
  
  getSourceList(param): Observable<any>{
    return this.http.get(environment.apiEndpointCRM + 'source_add_or_list/?'+param, this.httpHeaderOptions);
  }

  getLeadList(param): Observable<any>{
    return this.http.get(environment.apiEndpointCRM + 'lead_list/?'+param, this.httpHeaderOptions);
  }

  changeLeadStatus(leadId:number,params:any): Observable<any>{
    return this.http.patch(environment.apiEndpointCRM + 'lead_update/' + leadId + '/', params, this.httpHeaderOptions);
  }

  addLeadTask(leadId:number, data: any): Observable<any> {
    return this.http.patch(environment.apiEndpointCRM + 'add_task_to_lead/' + leadId + '/', data, this.httpHeaderOptions);
  }

  changeLeadTaskStatus(taskId:number, data: any): Observable<any> {
    return this.http.patch(environment.apiEndpointCRM + 'task_update/' + taskId + '/', data, this.httpHeaderOptions);
  }
  
  getLeadDetail(id:number): Observable<any>{
    return this.http.get(environment.apiEndpointCRM + 'lead_details/' + id + '/', this.httpHeaderOptions);
  }

  getDepartmentList(param): Observable<any>{
    return this.http.get(environment.apiEndpointCRM + 'department_add_or_list/?'+param, this.httpHeaderOptions);
  }

  getTechnologyList(param): Observable<any>{
    return this.http.get(environment.apiEndpointCRM + 'technology_add_or_list/?'+param, this.httpHeaderOptions);
  }

  getCurrencyList(param): Observable<any>{
    return this.http.get(environment.apiEndpoint + 't_core_currency_add_or_list/?'+param, this.httpHeaderOptions);
  }

  addOpportunity(data: any): Observable<any> {
    return this.http.post(environment.apiEndpointCRM + 'opportunity_create/', data, this.httpHeaderOptions);
  }

}
