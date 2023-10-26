import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-size',
  templateUrl: './add-size.component.html',
  styleUrls: ['./add-size.component.scss'],
})
export class AddSizeComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) {}

  sizeForm!: FormGroup;

  ngOnInit(): void {
    this.sizeForm = this._fb.group({
      size: ['', Validators.required],
    });
  }
}
