import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Components/FrontPage/container/container.component';
import { SidenavComponent } from './Components/FrontPage/sidenav/sidenav.component';
import { ContentComponent } from './Components/FrontPage/content/content.component';
import { HeaderComponent } from './Components/FrontPage/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from './allModules/services/services.module';
import { MaterialModule } from './allModules/material/material.module';
import { AddEmployeeComponent } from './Components/Employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './Components/Employee/view-employee/view-employee.component';
import { DashboardComponent } from './Components/FrontPage/dashboard/dashboard.component';
import { EmployeeComponent } from './Components/Employee/employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { AddTestComponent } from './test/add-test/add-test.component';
import { ViewTestComponent } from './test/view-test/view-test.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DesignationComponent } from './Components/designation/designation.component';
import { AddDesignationComponent } from './Components/designation/add-designation/add-designation.component';
import { ViewDesignationComponent } from './Components/designation/view-designation/view-designation.component';
import { IdTestComponent } from './test/id-test/id-test.component';
import { Test2Component } from './test2/test2.component';
import { AddTest2Component } from './test2/add-test2/add-test2.component';
import { ViewTest2Component } from './test2/view-test2/view-test2.component';
import { IdTest2Component } from './test2/id-test2/id-test2.component';
import { DetailEmployeeComponent } from './Components/Employee/detail-employee/detail-employee.component';
import { AddCustomerComponent } from './Components/Customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from './Components/Customer/view-customer/view-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SidenavComponent,
    ContentComponent,
    HeaderComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    DashboardComponent,
    EmployeeComponent,
    TestComponent,
    AddTestComponent,
    ViewTestComponent,
    FilterPipe,
    DesignationComponent,
    AddDesignationComponent,
    ViewDesignationComponent,
    IdTestComponent,
    Test2Component,
    AddTest2Component,
    ViewTest2Component,
    IdTest2Component,
    DetailEmployeeComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServicesModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
