import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-itemsw-buttons-print',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './itemsw-buttons-print.component.html',
  styleUrl: './itemsw-buttons-print.component.css'
})
export class ItemswButtonsPrintComponent {

  constructor(
    public dialogRef: MatDialogRef<ItemswButtonsPrintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
