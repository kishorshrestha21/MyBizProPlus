import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements AfterViewInit {
  btnLink: string = '';
  btnLinkText: string = '';
  constructor(
    private _hederService: HeaderService,
    private _cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this._hederService.linkBtn.subscribe((res) => {
      this.btnLink = res;
      // for NG0100: Expression has changed after it was checked error
      this._cdRef.detectChanges();
    });

    this._hederService.linkBtnText.subscribe((res) => {
      this.btnLinkText = res;
      this._cdRef.detectChanges();
    });
  }
}
