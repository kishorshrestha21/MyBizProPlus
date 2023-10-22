import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
})
export class AddBrandComponent implements OnInit {
  fileName: string = '';
  buttonName: string = 'Upload Photo';

  constructor(
    private _dialogRef: MatDialogRef<AddBrandComponent>,
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) {}

  brandForm!: FormGroup;

  onUploadLogo(event: any) {
    const brandLogo: File = event.target.files ? event.target.files[0] : null;

    if (brandLogo) {
      this.fileName = brandLogo.name;
    }
  }

  deleteLogo(brandLogo: any) {
    brandLogo.value = '';
    this.fileName = '';
  }
  barndSave() {}

  ngOnInit(): void {
    this.brandForm = this._fb.group({
      brand: ['', Validators.required],
      logo: [null],
    });
  }
}
