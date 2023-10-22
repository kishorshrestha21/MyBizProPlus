import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements AfterViewInit {
  btnLinkText: string = '';
  btnLink: string = '';
  constructor(
    private _headerService: HeaderService,
    private _cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this._headerService.linkBtn.subscribe((res) => {
      this.btnLink = res;
      // for NG0100: Expression has changed after it was checked error
      this._cdRef.detectChanges();
    });
  }
}
