import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/Services/header.service';
import { AddBrandComponent } from '../add-brand/add-brand.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements AfterViewInit, OnInit, OnDestroy {
  [x: string]: any;
  btnLinkText: string = '';
  btnLink: string = '';
  constructor(
    private _headerService: HeaderService,
    private _cdRef: ChangeDetectorRef,
    private _dialogBox: MatDialog,
    private _router: Router
  ) {}

  openAddBrand() {
    const dialogRef = this._dialogBox.open(AddBrandComponent);
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtnText.next('');
  }
  ngOnInit(): void {
    this._headerService.headerTitle.next('Brand List');
    this._headerService.linkBtnText.next('Add Brand');
  }

  ngAfterViewInit(): void {
    this._headerService.linkBtnText.subscribe((res) => {
      this.btnLinkText = res;
      this._cdRef.detectChanges();
    });
  }
}
