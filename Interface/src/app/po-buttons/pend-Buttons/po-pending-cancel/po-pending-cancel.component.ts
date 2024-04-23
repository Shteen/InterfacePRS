import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-po-pending-cancel',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './po-pending-cancel.component.html',
  styleUrl: './po-pending-cancel.component.css'
})
export class PoPendingCancelComponent {

  constructor(
    public dialogRef: MatDialogRef<PoPendingCancelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
