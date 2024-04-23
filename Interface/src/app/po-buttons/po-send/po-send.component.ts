import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-po-send',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './po-send.component.html',
  styleUrl: './po-send.component.css'
})
export class PoSendComponent {

  constructor(
    public dialogRef: MatDialogRef<PoSendComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
