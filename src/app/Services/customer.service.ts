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

  addCustomerId(customerId: any): Observable<any> {
    return this._http.post(this.customerIdApi, customerId);
  }
  getCustomerId(id: number): Observable<any> {
    return this._http.get(`${this.customerIdApi}/${id}`);
  }

  getCustomerSingalData() {
    return this._http.get(this.customerIdApi);
  }

  updateCustomerId(data: any, id: number): Observable<any> {
    // Assuming you have an endpoint like /customers/{id} for updating
    const url = `${this.customerIdApi}/${id}`;
    return this._http.put(url, data);
  }

  addCustomer(data: any): Observable<any> {
    return this._http.post(this.customerApi, data);
  }
  getCustomer(): Observable<any> {
    return this._http.get(this.customerApi);
  }

  // Inside the CustomerService
  getLatestCustomerId(): Observable<any> {
    // This endpoint should fetch the record with the highest cId from the database
    return this._http.get(this.customerIdApi + 'latest');
  }
}
