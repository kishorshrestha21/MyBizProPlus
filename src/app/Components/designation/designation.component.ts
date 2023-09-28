import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss'],
})
export class DesignationComponent {
  btnLink: string = '';
  btnLinkText: string = '';
  constructor() {}
}
