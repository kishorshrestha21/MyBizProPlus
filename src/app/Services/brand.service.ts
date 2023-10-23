import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private _http: HttpClient) {}

  branAPI = 'http://localhost:3000/brand';

  getBrand(): Observable<any> {
    return this._http.get(this.branAPI);
  }

  addBrand(data: any): Observable<any> {
    return this._http.post(this.branAPI, data);
  }

  deletBrand(id: number): Observable<any> {
    return this._http.delete(`${this.branAPI}/${id}`);
  }
}
