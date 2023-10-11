import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from 'src/app/Components/Employee/add-employee/add-employee.component';
import { DetailEmployeeComponent } from 'src/app/Components/Employee/detail-employee/detail-employee.component';
import { EmployeeComponent } from 'src/app/Components/Employee/employee/employee.component';
import { ViewEmployeeComponent } from 'src/app/Components/Employee/view-employee/view-employee.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeFilterPipe } from 'src/app/pipes/employee-filter.pipe';

const employeeRoutes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: 'view-employee', component: ViewEmployeeComponent },
      // work same but path name diffrent
      { path: 'view-employee/:abc', component: DetailEmployeeComponent },
      { path: 'detail-employee/:abc', component: DetailEmployeeComponent },
      // ======================================
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'add-employee/:id', component: AddEmployeeComponent },
      { path: 'detail-employee', component: DetailEmployeeComponent },
      { path: '', redirectTo: 'view-employee', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewEmployeeComponent,
    EmployeeComponent,
    DetailEmployeeComponent,
    EmployeeFilterPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(employeeRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class EmployeeModule {}
