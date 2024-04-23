import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rr-edit',
  standalone: true,
  imports: [],
  templateUrl: './rr-edit.component.html',
  styleUrl: './rr-edit.component.css'
})
export class RrEditComponent {

  constructor(
    public dialogRef: MatDialogRef<RrEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
}
