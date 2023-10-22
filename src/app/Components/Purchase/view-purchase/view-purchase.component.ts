import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.scss'],
})
export class ViewPurchaseComponent implements OnInit, OnDestroy {
  constructor(private _headerService: HeaderService) {}

  ngOnInit(): void {
    this._headerService.headerTitle.next('Purchase List');
    this._headerService.linkBtnText.next('Add Purchase Order');
    this._headerService.linkBtn.next('add-purchase');
  }

  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtnText.next('');
    this._headerService.linkBtn.next('');
  }
}
