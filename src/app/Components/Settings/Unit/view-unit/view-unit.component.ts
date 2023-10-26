import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from 'src/app/Services/header.service';
import { AddUnitComponent } from '../add-unit/add-unit.component';

@Component({
  selector: 'app-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.scss'],
})
export class UnitComponent implements OnInit, OnDestroy {
  constructor(
    private _headerService: HeaderService,
    private _dialogBox: MatDialog
  ) {}
  openAddUnit() {
    this._dialogBox.open(AddUnitComponent, {
      width: '400px',
    });
  }
  ngOnInit(): void {
    this._headerService.headerTitle.next('Unit List');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
