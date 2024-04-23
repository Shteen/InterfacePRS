import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-canvas-delete',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './canvas-delete.component.html',
  styleUrl: './canvas-delete.component.css'
})
export class CanvasDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<CanvasDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}




  

}
