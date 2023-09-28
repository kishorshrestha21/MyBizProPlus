import { Component, Inject } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DesignationService } from 'src/app/Services/designation.service';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.scss'],
})
export class AddDesignationComponent {
  constructor(
    private _headerService: HeaderService,
    private _fb: FormBuilder,
    private _designationService: DesignationService,
    private _dialofRef: MatDialogRef<AddDesignationComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) {}

  designationForm!: FormGroup;
  dgSave() {
    if (this._data) {
      this._designationService
        .editDesignation(this._data.id, this.designationForm.value)
        .subscribe({
          next: (res) => {
            alert('Updated');
            this._dialofRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    } else {
      this._designationService
        .addDesignation(this.designationForm.value)
        .subscribe({
          next: (res) => {
            alert('Data Added');
            this._dialofRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    }
  }
  ngOnInit(): void {
    this._headerService.headerTitle.next('Designation');
    this.designationForm = this._fb.group({
      designation: [''],
    });
    this.designationForm.patchValue(this._data);
    // this._headerService.linkBtnText.next('View Designation');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
