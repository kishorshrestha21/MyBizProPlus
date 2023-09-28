import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  employeeUrl = 'http://localhost:3000/employee';
  rUrl = 'https://www.bizproplus.com/api/employee';
  withImgurl = 'https://www.bizproplus.com/api/new-employee';

  // addEmployee(data: any): Observable<any> {
  //   return this._http.post(this.employeeUrl, data);
  // }

  // getEmployee(): Observable<any> {
  //   return this._http.get(this.employeeUrl);
  // }

  // deleteEmployee(id: number): Observable<any> {
  //   return this._http.delete(`${this.employeeUrl}/${id}`);
  // }

  // editEmployee(id: number, data: any) {
  //   return this._http.put(`${this.employeeUrl}/${id}`, data);
  // }

  // getEmployeeById(id: number): Observable<any> {
  //   return this._http.get(`${this.employeeUrl}/${id}`);
  // }

  // ======================
  // addEmployee(data: any): Observable<any> {
  //   return this._http.post(this.rUrl, data);
  // }

  // getEmployee(): Observable<any> {
  //   return this._http.get(this.rUrl);
  // }

  // deleteEmployee(id: number): Observable<any> {
  //   return this._http.delete(`${this.rUrl}/${id}`);
  // }

  // editEmployee(id: number, data: any) {
  //   return this._http.put(`${this.rUrl}/${id}`, data);
  // }

  // getEmployeeById(id: number): Observable<any> {
  //   return this._http.get(`${this.rUrl}/${id}`);
  // }

  // ================================

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.withImgurl, data);
  }

  getEmployee(): Observable<any> {
    return this._http.get(this.withImgurl);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.withImgurl}/${id}`);
  }

  // editEmployee(id: number, data: any) {
  //   return this._http.put(`${this.withImgurl}/${id}`, data);
  // }

  editEmployee(id: number, data: any) {
    return this._http.post(`${this.withImgurl}/${id}`, data);
  }

  getEmployeeById(id: number): Observable<any> {
    return this._http.get(`${this.withImgurl}/${id}`);
  }
}

// return this._http.delete(this.employeeUrl + '/' + id);
