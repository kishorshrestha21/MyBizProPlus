import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../Services/header.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, OnDestroy {
  constructor(private _headerService: HeaderService) {}
  ngOnInit(): void {
    this._headerService.headerTitle.next('Test');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
