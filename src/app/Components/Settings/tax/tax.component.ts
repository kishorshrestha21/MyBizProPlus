import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/Services/brand.service';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.scss'],
})
export class TaxComponent implements OnInit, OnDestroy {
  constructor(
    private _headerService: HeaderService,
    private _cdRef: ChangeDetectorRef,
    private _dialogBox: MatDialog,
    private _router: Router
  ) {}

  btnLinkText: string = '';
  btnLink: string = '';

  ngOnInit(): void {
    this._headerService.headerTitle.next('Tax');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
