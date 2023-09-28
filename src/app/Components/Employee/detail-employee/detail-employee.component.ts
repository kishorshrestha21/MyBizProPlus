import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss'],
})
export class DetailEmployeeComponent implements OnInit {
  constructor(
    private _employeeService: EmployeeService,
    private _activeRoute: ActivatedRoute
  ) {}
  employeeDetailDatas: any[] = [];
  getDetailData() {
    const id = this._activeRoute.snapshot.params['abc'];
    this._employeeService.getEmployeeById(id).subscribe({
      next: (res: any) => {
        this.employeeDetailDatas = [res];
        console.log(this.employeeDetailDatas);
      },
    });
  }
  ngOnInit(): void {
    this.getDetailData();
  }
}
