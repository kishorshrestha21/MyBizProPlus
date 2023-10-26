import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPasscodeComponent } from '../add-passcode/add-passcode.component';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-pass-code',
  templateUrl: './pass-code.component.html',
  styleUrls: ['./pass-code.component.scss'],
})
export class PassCodeComponent implements OnInit, OnDestroy {
  constructor(
    private _dialogBox: MatDialog,
    private _headerService: HeaderService
  ) {}

  openAddPasscode() {
    const dialogRef = this._dialogBox.open(AddPasscodeComponent, {
      width: '400px',
    });
  }

  ngOnInit(): void {
    this._headerService.headerTitle.next('Passcode');
  }

  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
