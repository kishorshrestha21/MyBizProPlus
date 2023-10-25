import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCardComponent } from '../add-card/add-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private _dialogBox: MatDialog) {}

  openAddCard() {
    const dialogRef = this._dialogBox.open(AddCardComponent, {
      width: '400px',
      height: '300px',
    });
  }
}
