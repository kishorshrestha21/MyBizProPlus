import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/FrontPage/dashboard/dashboard.component';
import { AddEmployeeComponent } from './Components/Employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './Components/Employee/view-employee/view-employee.component';
import { EmployeeComponent } from './Components/Employee/employee/employee.component';
import { TestComponent } from './test/test.component';
import { ViewTestComponent } from './test/view-test/view-test.component';
import { AddTestComponent } from './test/add-test/add-test.component';
import { DesignationComponent } from './Components/designation/designation.component';
import { AddDesignationComponent } from './Components/designation/add-designation/add-designation.component';
import { ViewDesignationComponent } from './Components/designation/view-designation/view-designation.component';
import { IdTestComponent } from './test/id-test/id-test.component';
import { Test2Component } from './test2/test2.component';
import { ViewTest2Component } from './test2/view-test2/view-test2.component';
import { IdTest2Component } from './test2/id-test2/id-test2.component';
import { AddTest2Component } from './test2/add-test2/add-test2.component';
import { DetailEmployeeComponent } from './Components/Employee/detail-employee/detail-employee.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  {
    path: 'designation',
    component: DesignationComponent,
    children: [
      { path: 'add-designation', component: AddDesignationComponent },
      { path: 'view-designation', component: ViewDesignationComponent },
      { path: '', component: ViewDesignationComponent },
    ],
  },
  {
    path: 'employee',
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

  {
    path: 'test',
    component: TestComponent,
    children: [
      { path: 'view-test', component: ViewTestComponent },
      { path: 'view-test/:abc', component: IdTestComponent },
      { path: 'add-test', component: AddTestComponent },
      { path: 'add-test/:id', component: AddTestComponent },
      { path: 'id-test', component: IdTestComponent },
      { path: '', redirectTo: 'view-test', pathMatch: 'full' },
    ],
  },
  {
    path: 'test2',
    component: Test2Component,
    children: [
      { path: 'view-test2', component: ViewTest2Component },
      { path: 'view-test2/:id', component: IdTest2Component },
      { path: 'add-test2', component: AddTest2Component },
      { path: 'add-tes2t/:id', component: AddTest2Component },
      { path: 'id-test2', component: IdTest2Component },
      { path: '', redirectTo: 'view-test2', pathMatch: 'full' },
    ],
  },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
