import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from 'src/app/Components/Customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from 'src/app/Components/Customer/view-customer/view-customer.component';
import { CustomerComponent } from 'src/app/Components/Customer/customer/customer.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const customerRoute: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: 'add-customer', component: AddCustomerComponent },
      { path: 'view-customer', component: ViewCustomerComponent },
      { path: '', redirectTo: 'view-customer', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    AddCustomerComponent,
    CustomerComponent,
    ViewCustomerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(customerRoute),
    ReactiveFormsModule,
  ],
})
export class CustomerModuleModule {}
