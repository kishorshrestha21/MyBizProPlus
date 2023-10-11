import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reward-point',
  templateUrl: './reward-point.component.html',
  styleUrls: ['./reward-point.component.scss'],
})
export class RewardPointComponent {
  constructor(private _dailogRef: MatDialogRef<RewardPointComponent>) {}
}
