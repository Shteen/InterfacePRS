import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-canvas-add-butt-del-item',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './canvas-add-butt-del-item.component.html',
  styleUrl: './canvas-add-butt-del-item.component.css'
})
export class CanvasAddButtDelItemComponent {

  constructor(
    public dialogRef: MatDialogRef<CanvasAddButtDelItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


}
