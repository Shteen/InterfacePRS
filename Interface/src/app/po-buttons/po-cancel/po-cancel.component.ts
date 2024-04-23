import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-po-cancel',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './po-cancel.component.html',
  styleUrl: './po-cancel.component.css'
})
export class PoCancelComponent {

  constructor(
    public dialogRef: MatDialogRef<PoCancelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


}
