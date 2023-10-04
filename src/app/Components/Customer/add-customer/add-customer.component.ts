import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit, OnDestroy {
  constructor(private _headerService: HeaderService) {}
  ngOnInit() {
    this._headerService.headerTitle.next('Add Customer');
    this._headerService.linkBtnText.next('View Customer');
    this._headerService.linkBtn.next('view-customer');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtn.next('');
    this._headerService.linkBtnText.next('');
  }
}
