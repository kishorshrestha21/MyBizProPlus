import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from 'src/app/Services/header.service';
import { AddVendorComponent } from '../add-vendor/add-vendor.component';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.scss'],
})
export class ViewVendorComponent implements OnInit, OnDestroy {
  constructor(
    private _headerService: HeaderService,
    private _matDialog: MatDialog
  ) {}

  openAddVendor() {
    this._matDialog.open(AddVendorComponent);
  }

  ngOnInit(): void {
    this._headerService.headerTitle.next('Vender List');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
