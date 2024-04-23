import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cheque-print',
  standalone: true,
  imports: [],
  templateUrl: './cheque-print.component.html',
  styleUrl: './cheque-print.component.css'
})
export class ChequePrintComponent {
  constructor(
    public dialogRef: MatDialogRef<ChequePrintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
