import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-po-print',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './po-print.component.html',
  styleUrl: './po-print.component.css'
})
export class PoPrintComponent {

  constructor(
    public dialogRef: MatDialogRef<PoPrintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
