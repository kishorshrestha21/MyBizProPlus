import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
})
export class AddBrandComponent implements OnInit {
  fileName: string = '';
  buttonName: string = 'Upload Photo';
  brands: any[] = [];
  brandImage: any;

  constructor(
    private _brandService: BrandService,
    private _dialogRef: MatDialogRef<AddBrandComponent>,
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) {}

  brandForm!: FormGroup;

  onUploadLogo(event: any) {
    const brandLogo: File = event.target.files ? event.target.files[0] : null;

    if (brandLogo) {
      this.brandImage = brandLogo;
      this.fileName = brandLogo.name;
    }
  }

  deleteLogo(brandLogo: any) {
    brandLogo.value = '';
    this.fileName = '';
  }
  barndSave() {
    this._brandService.addBrand(this.brandForm.value).subscribe({
      next: (res: any) => {
        alert('Data Added');
        this._dialogRef.close(true);
      },
    });
  }

  ngOnInit(): void {
    this.brandForm = this._fb.group({
      brand: ['', Validators.required],
      logo: [null],
    });
  }
}
