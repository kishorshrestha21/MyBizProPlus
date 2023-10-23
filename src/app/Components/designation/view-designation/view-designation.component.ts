import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from 'src/app/Services/header.service';
import { AddDesignationComponent } from '../add-designation/add-designation.component';
import { DesignationService } from 'src/app/Services/designation.service';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
import { DesignationComponent } from '../designation.component';

@Component({
  selector: 'app-view-designation',
  templateUrl: './view-designation.component.html',
  styleUrls: ['./view-designation.component.scss'],
})
export class ViewDesignationComponent {
  constructor(
    private _headerService: HeaderService,
    private _dialogBox: MatDialog,
    private _designationService: DesignationService,
    private _router: Router
  ) {}

  designations: any[] = [];

  openAddDesignation() {
    const dialogRef = this._dialogBox.open(AddDesignationComponent);
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.getDesignationData();
        }
      },
    });
    // not close dialog while click outside
    // this._dialogBox.open(AddDesignationComponent, { disableClose: true });
  }

  getDesignationData() {
    this._designationService.getDesignation().subscribe({
      next: (res) => {
        this.designations = res;
      },
      error: console.log,
    });
  }

  onDeleteDesignation(id: number) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this._designationService.deleteDesignation(id).subscribe({
        next: (res) => {
          alert('deleted');
          this.getDesignationData();
        },
        error: console.log,
      });
    }
  }

  navigateToAddDesignation(data: any) {
    const dialogRef = this._dialogBox.open(AddDesignationComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.getDesignationData();
        }
      },
    });
  }

  ngOnInit(): void {
    this._headerService.headerTitle.next('Designation');
    this.getDesignationData();
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
