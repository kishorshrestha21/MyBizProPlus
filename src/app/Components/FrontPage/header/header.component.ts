import { Component } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  data: any;
  headerTitle: string = '';

  constructor(private _headerService: HeaderService) {
    this._headerService.headerTitle.subscribe((res) => {
      this.headerTitle = res;
    });
  }
  headerActive: boolean = true;
  hamMenu() {
    this.headerActive = !this.headerActive;
    this._headerService.headerActive.next(this.headerActive);
  }
}
