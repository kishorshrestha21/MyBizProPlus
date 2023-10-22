import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements AfterViewInit, OnInit {
  btnLinkText: string = '';
  btnLink: string = '';
  constructor(
    private _headerService: HeaderService,
    private _cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this._headerService.headerTitle.next('Brand List');
  }

  ngAfterViewInit(): void {
    this._headerService.linkBtnText.subscribe((res) => {
      this.btnLinkText = res;
      this._cdRef.detectChanges();
    });
  }
}
