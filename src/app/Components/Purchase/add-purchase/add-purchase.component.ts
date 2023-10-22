import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss'],
})
export class AddPurchaseComponent implements OnInit, OnDestroy {
  constructor(private _headerService: HeaderService) {}
  ngOnInit(): void {
    this._headerService.headerTitle.next('Purchase Order Form');
    this._headerService.linkBtnText.next('View Purchase');
    this._headerService.linkBtn.next('View-purchase');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtnText.next('');
    this._headerService.linkBtn.next('');
  }
}
