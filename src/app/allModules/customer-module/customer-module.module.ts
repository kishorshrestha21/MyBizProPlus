import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from 'src/app/Components/Customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from 'src/app/Components/Customer/view-customer/view-customer.component';
import { CustomerComponent } from 'src/app/Components/Customer/customer/customer.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailCustomerComponent } from 'src/app/Components/Customer/detail-customer/detail-customer.component';

const customerRoute: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: 'add-customer', component: AddCustomerComponent },
      { path: 'view-customer', component: ViewCustomerComponent },
      { path: 'add-customer/:id', component: AddCustomerComponent },
      { path: 'view-customer/:id', component: DetailCustomerComponent },
      { path: '', redirectTo: 'view-customer', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    AddCustomerComponent,
    CustomerComponent,
    ViewCustomerComponent,
    DetailCustomerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(customerRoute),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CustomerModuleModule {
  constructor() {
    console.log('Customer Module');
  }
}
