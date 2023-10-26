import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-passcode',
  templateUrl: './add-passcode.component.html',
  styleUrls: ['./add-passcode.component.scss'],
})
export class AddPasscodeComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    // private _dialogRef: MatDialogRef<AddPasscodeComponent>
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) {}

  passcodeForm!: FormGroup;

  ngOnInit(): void {
    this.passcodeForm = this._fb.group({
      passcode: ['', Validators.required],
    });
  }
}
