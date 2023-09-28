import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignationService {
  constructor(private _http: HttpClient) {}

  // designationUrl = 'http://localhost:3000/designation';
  designationUrl = 'https://www.bizproplus.com/api/designation';

  addDesignation(data: any): Observable<any> {
    return this._http.post(this.designationUrl, data);
  }

  getDesignation(): Observable<any> {
    return this._http.get(this.designationUrl);
  }

  deleteDesignation(id: number): Observable<any> {
    return this._http.delete(`${this.designationUrl}/${id}`);
  }

  getDesignationById(id: number): Observable<any> {
    return this._http.get(`${this.designationUrl}/${id}`);
  }

  editDesignation(id: number, data: any) {
    return this._http.put(`${this.designationUrl}/${id}`, data);
  }
}
