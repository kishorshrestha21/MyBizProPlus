import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<AddCardComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any,
    private _fb: FormBuilder
  ) {}

  fileName: string = '';
  buttonName: string = 'Upload Photo';
  cardForm!: FormGroup;

  cardsForm() {
    this.cardForm = this._fb.group({
      cardName: ['', Validators.required],
      cardImg: [null],
    });
  }

  onUploadCardImg(event: any) {
    const cardImg: File = event.target.files ? event.target.files[0] : null;
    if (cardImg) {
      this.fileName = cardImg.name;
    }
  }

  deleteCargImg(cardImg: any) {
    cardImg.value = '';
    this.fileName = '';
  }
  ngOnInit(): void {
    this.cardsForm();
  }
}
