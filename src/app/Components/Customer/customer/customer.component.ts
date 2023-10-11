import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from 'src/app/Services/header.service';
import { RewardPointComponent } from '../reward-point/reward-point.component';

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
    private _cdRef: ChangeDetectorRef,
    private _dialogBox: MatDialog
  ) {
    console.log('customer Component');
  }

  openReward() {
    this._dialogBox.open(RewardPointComponent);
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
