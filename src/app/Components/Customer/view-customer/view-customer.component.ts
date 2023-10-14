import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss'],
})
export class ViewCustomerComponent implements OnInit, OnDestroy {
  customers: any[] = [];
  constructor(
    private _headerService: HeaderService,
    private _customerService: CustomerService
  ) {}

  getCustomerData() {
    this._customerService.getCustomer().subscribe({
      next: (res: any) => {
        this.customers = res;
      },
    });
  }

  ngOnInit() {
    this._headerService.headerTitle.next('Customer List');
    this._headerService.linkBtnText.next('Add Customer');
    this._headerService.linkBtn.next('add-customer');
    this.getCustomerData();
  }

  ngOnDestroy() {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtn.next('');
    this._headerService.linkBtnText.next('');
  }
}
