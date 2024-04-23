import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-ts-print',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './ts-print.component.html',
  styleUrl: './ts-print.component.css'
})
export class TSPrintComponent {

  constructor(
    public dialogRef: MatDialogRef<TSPrintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
