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
    if (this._data) {
      this._brandService
        .updateBrand(this._data.id, this.brandForm.value)
        .subscribe({
          next: (res) => {
            alert('Updated');
            this._dialogRef.close(true);
          },
          error: (err) => {
            console.error('Error updating brand:', err);
          },
        });
    } else {
      this._brandService.addBrand(this.brandForm.value).subscribe({
        next: (res: any) => {
          alert('Data Added');
          // this._dialogRef.close(true);
          this.brandForm.reset();
        },
      });
    }
  }

  ngOnInit(): void {
    this.brandForm = this._fb.group({
      brand: ['', Validators.required],
      logo: [null],
    });

    if (this._data) {
      // checking if data exists
      this.brandForm.patchValue({
        brand: this._data.brand,
        logo: this._data.logo,
      });
      //displaying the logo's filename when editing
      this.fileName = this._data.logo;
    }
  }
}
