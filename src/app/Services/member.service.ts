import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { test } from 'src/app/_interface/dataType';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private _http: HttpClient) {}

  memberUrl = 'http://localhost:3000/member';
  newUrl = 'https://www.bizproplus.com/api/employee-list';

  employeeUrl = 'http://localhost:3000/newMember';

  memberApi = 'https://www.bizproplus.com/api/member';

  addMember(data: FormData): Observable<test[]> {
    // return this._http.post(this.employeeUrl, data);
    // return this._http.post(this.memberUrl, data);
    // return this._http.post(this.newMemberUrl, data);

    return this._http.post<test[]>(this.memberApi, data);
  }

  getMember(): Observable<test[]> {
    // return this._http.get(this.employeeUrl);

    // return this._http.get(this.memberUrl);
    // return this._http.get(this.newMemberUrl);

    return this._http.get<test[]>(this.memberApi);
  }

  getMemberById(id: number): Observable<any> {
    return this._http.get(`${this.memberApi}/${id}`);

    // return this._http.get(`${this.employeeUrl}/${id}`);
  }

  deleteMember(id: number): Observable<any> {
    // return this._http.delete(`${this.employeeUrl}/${id}`);
    return this._http.delete(`${this.memberApi}/${id}`);
  }

  // editMember(id: number, data: any) {
  // return this._http.put(`${this.employeeUrl}/${id}`, data);
  // return this._http.put(`${this.memberApi}/${id}`, data);
  // }

  editMember(id: number, data: any) {
    // return this._http.put(${this.employeeUrl}/${id}, data);
    return this._http.post(`${this.memberApi}/${id}`, data);
  }
}
