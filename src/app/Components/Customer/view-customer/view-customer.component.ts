import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss'],
})
export class ViewCustomerComponent implements OnInit, OnDestroy {
  constructor(private _headerService: HeaderService) {}

  ngOnInit() {
    this._headerService.headerTitle.next('Customer List');
    this._headerService.linkBtnText.next('Add Customer');
    this._headerService.linkBtn.next('add-customer');
  }

  ngOnDestroy() {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtn.next('');
    this._headerService.linkBtnText.next('');
  }
}
