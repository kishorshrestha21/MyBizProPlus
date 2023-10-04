import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from 'src/app/Components/Customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from 'src/app/Components/Customer/view-customer/view-customer.component';
import { CustomerComponent } from 'src/app/Components/Customer/customer/customer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddCustomerComponent,
    CustomerComponent,
    ViewCustomerComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class CustomerModuleModule {}
