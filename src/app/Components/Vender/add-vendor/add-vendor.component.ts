import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss'],
})
export class AddVendorComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) {}

  vendorForm!: FormGroup;
  addVedorForm() {
    this.vendorForm = this._fb.group({
      cReg: [''],
      cName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      apt: [''],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      cPerson: ['', Validators.required],
      cEmail: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.addVedorForm();
  }
}
