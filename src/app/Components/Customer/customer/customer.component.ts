import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements AfterViewInit {
  btnLink: string = '';
  btnLinkText: string = '';
  constructor(
    private _hederService: HeaderService,
    private _cdRef: ChangeDetectorRef
  ) {
    console.log('Customer Component');
  }
  ngAfterViewInit(): void {
    this._hederService.linkBtnText.subscribe((res) => {
      this.btnLinkText = res;
      this._cdRef.detectChanges();
    });
    this._hederService.linkBtn.subscribe((res) => {
      this.btnLink = res;
      this._cdRef.detectChanges();
    });
  }
}
