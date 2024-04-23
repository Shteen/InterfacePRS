import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rr-submit',
  standalone: true,
  imports: [],
  templateUrl: './rr-submit.component.html',
  styleUrl: './rr-submit.component.css'
})
export class RrSubmitComponent {

  constructor(
    public dialogRef: MatDialogRef<RrSubmitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
