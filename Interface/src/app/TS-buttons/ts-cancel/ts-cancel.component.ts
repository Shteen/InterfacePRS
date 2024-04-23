import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-ts-cancel',
  standalone: true,
  imports: [
  MaterialModule
  ],
  templateUrl: './ts-cancel.component.html',
  styleUrl: './ts-cancel.component.css'
})
export class TSCancelComponent {

  constructor(
    public dialogRef: MatDialogRef<TSCancelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
