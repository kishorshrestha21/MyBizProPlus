import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from 'src/app/Components/Customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from 'src/app/Components/Customer/view-customer/view-customer.component';
import { CustomerComponent } from 'src/app/Components/Customer/customer/customer.component';
import { RouterModule } from '@angular/router';

const customerRoute = [
  {
    path: 'customer',
    Component: CustomerComponent,
    children: [
      { path: 'customer', Component: CustomerComponent },
      { path: 'add-customer', Component: AddCustomerComponent },
      { path: 'view-customer', Component: ViewCustomerComponent },
      { path: '', redirectTo: 'view-sustomer', pathMath: 'full' },
    ],
  },
];
@NgModule({
  declarations: [
    AddCustomerComponent,
    CustomerComponent,
    ViewCustomerComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(customerRoute)],
})
export class CustomerModuleModule {}
