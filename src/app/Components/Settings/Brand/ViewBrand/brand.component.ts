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
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements AfterViewInit, OnInit, OnDestroy {
  [x: string]: any;
  btnLinkText: string = '';
  btnLink: string = '';
  brands: any[] = [];
  constructor(
    private _headerService: HeaderService,
    private _cdRef: ChangeDetectorRef,
    private _dialogBox: MatDialog,
    private _router: Router,
    private _brandService: BrandService
  ) {}

  openAddBrand() {
    const dialogRef = this._dialogBox.open(AddBrandComponent);
  }

  getBrandData() {
    this._brandService.getBrand().subscribe({
      next: (res: any) => {
        this.brands = res;
      },
    });
  }

  deleteBrandById(id: number) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this._brandService.deletBrand(id).subscribe({
        next: (res) => {},
      });
    }
    this.getBrandData();
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtnText.next('');
  }
  ngOnInit(): void {
    this._headerService.headerTitle.next('Brand List');
    this._headerService.linkBtnText.next('Add Brand');
    this.getBrandData();
  }

  ngAfterViewInit(): void {
    this._headerService.linkBtnText.subscribe((res) => {
      this.btnLinkText = res;
      this._cdRef.detectChanges();
    });
  }
}
