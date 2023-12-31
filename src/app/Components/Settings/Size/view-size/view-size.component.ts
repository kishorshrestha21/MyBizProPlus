import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from 'src/app/Services/header.service';
import { AddSizeComponent } from '../add-size/add-size.component';

@Component({
  selector: 'app-size',
  templateUrl: './view-size.component.html',
  styleUrls: ['./view-size.component.scss'],
})
export class SizeComponent implements OnInit, OnDestroy {
  constructor(
    private _headerService: HeaderService,
    private _dialogBox: MatDialog
  ) {}

  openAddSize() {
    const dialogRef = this._dialogBox.open(AddSizeComponent, {
      width: '400px',
    });
  }
  ngOnInit(): void {
    this._headerService.headerTitle.next('Size List');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
