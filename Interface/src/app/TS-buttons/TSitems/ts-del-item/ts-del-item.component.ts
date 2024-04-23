import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-ts-del-item',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './ts-del-item.component.html',
  styleUrl: './ts-del-item.component.css'
})
export class TsDelItemComponent {

  constructor(
    public dialogRef: MatDialogRef<TsDelItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  

}
