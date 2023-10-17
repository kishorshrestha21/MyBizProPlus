import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private _http: HttpClient) {}

  customerApi = 'http://localhost:3000/customers';
  customerIdApi = 'http://localhost:3000/customerId';

  getCustomerSingalData() {
    return this._http.get(this.customerIdApi);
  }

  updateCustomerId(data: any, id: number): Observable<any> {
    const url = `${this.customerIdApi}/${id}`;
    return this._http.put(url, data);
  }

  addCustomer(data: any): Observable<any> {
    return this._http.post(this.customerApi, data);
  }
  getCustomer(): Observable<any> {
    return this._http.get(this.customerApi);
  }

  deleteCustomer(id: number): Observable<any> {
    return this._http.delete(`${this.customerApi}/${id}`);
  }

  getCustomerById(id: number): Observable<any> {
    return this._http.get(`${this.customerApi}/${id}`);
  }

  editCustomer(id: number, data: any) {
    return this._http.put(`${this.customerApi}/${id}`, data);
  }
}
