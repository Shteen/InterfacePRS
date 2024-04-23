import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-canvas-submit',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './canvas-submit.component.html',
  styleUrl: './canvas-submit.component.css'
})
export class CanvasSubmitComponent {

  constructor(
    public dialogRef: MatDialogRef<CanvasSubmitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}


