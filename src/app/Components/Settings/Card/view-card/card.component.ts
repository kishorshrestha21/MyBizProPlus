import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCardComponent } from '../add-card/add-card.component';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  constructor(
    private _dialogBox: MatDialog,
    private _headerService: HeaderService
  ) {}

  openAddCard() {
    const dialogRef = this._dialogBox.open(AddCardComponent, {
      width: '400px',
    });
  }

  ngOnInit(): void {
    this._headerService.headerTitle.next('Card List');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
