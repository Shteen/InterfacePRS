import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-po-post',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './po-post.component.html',
  styleUrl: './po-post.component.css'
})
export class PoPostComponent {

  constructor(
    public dialogRef: MatDialogRef<PoPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
