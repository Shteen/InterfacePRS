import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rr-delete',
  standalone: true,
  imports: [],
  templateUrl: './rr-delete.component.html',
  styleUrl: './rr-delete.component.css'
})
export class RrDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<RrDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
}
