import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-po-pending-print',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './po-pending-print.component.html',
  styleUrl: './po-pending-print.component.css'
})
export class PoPendingPrintComponent {

  constructor(
    public dialogRef: MatDialogRef<PoPendingPrintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
