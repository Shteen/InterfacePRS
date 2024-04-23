import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-ts-add-item-rep',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './ts-add-item-rep.component.html',
  styleUrl: './ts-add-item-rep.component.css'
})
export class TsAddItemRepComponent {


  constructor(
    public dialogRef: MatDialogRef<TsAddItemRepComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
