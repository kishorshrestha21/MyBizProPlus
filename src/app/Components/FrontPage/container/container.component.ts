import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements AfterViewInit {
  headerActive: boolean = false;
  headerTitle: string = '';
  headerService: any;

  constructor(
    private _headerService: HeaderService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this._headerService.headerActive.subscribe((res: any) => {
      this.headerActive = res;
    });
    this._headerService.headerTitle.subscribe((res) => {
      this.headerTitle = res;
      this.cdRef.detectChanges();
    });
  }

  hamMenu() {
    this.headerActive = !this.headerActive;
    this._headerService.headerActive.next(this.headerActive);
  }
}
