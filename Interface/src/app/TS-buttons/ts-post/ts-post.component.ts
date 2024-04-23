import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-ts-post',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './ts-post.component.html',
  styleUrl: './ts-post.component.css'
})
export class TSPostComponent {


  constructor(
    public dialogRef: MatDialogRef<TSPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
