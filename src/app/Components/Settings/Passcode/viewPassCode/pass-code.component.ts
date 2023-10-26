import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPasscodeComponent } from '../add-passcode/add-passcode.component';

@Component({
  selector: 'app-pass-code',
  templateUrl: './pass-code.component.html',
  styleUrls: ['./pass-code.component.scss'],
})
export class PassCodeComponent {
  constructor(private _dialogBox: MatDialog) {}

  openAddPasscode() {
    const dialogRef = this._dialogBox.open(AddPasscodeComponent, {
      width: '400px',
      height: '300px',
    });
  }
}
