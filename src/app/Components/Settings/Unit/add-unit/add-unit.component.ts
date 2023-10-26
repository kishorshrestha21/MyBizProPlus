import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss'],
})
export class AddUnitComponent implements OnInit, OnDestroy {
  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) {}

  unitForm!: FormGroup;
  ngOnInit(): void {
    this.unitForm = this._fb.group({
      unit: ['', Validators.required],
    });
  }
  ngOnDestroy(): void {}
}
