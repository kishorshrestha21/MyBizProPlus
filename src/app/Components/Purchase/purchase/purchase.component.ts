import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements AfterViewInit {
  btnLink: string = '';
  btnLinkText: string = '';

  constructor(
    private _headerService: HeaderService,
    private _cdRef: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    this._headerService.linkBtn.subscribe({
      next: (res) => {
        this.btnLink = res;
        this._cdRef.detectChanges();
      },
    });
    this._headerService.linkBtnText.subscribe((res) => {
      this.btnLinkText = res;
      this._cdRef.detectChanges();
    });
  }
}
