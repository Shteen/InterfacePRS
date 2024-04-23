import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cheque-new-it',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cheque-new-it.component.html',
  styleUrl: './cheque-new-it.component.css'
})
export class ChequeNewItComponent {

  disableAmount = new FormControl(true);

  constructor(
    public dialogRef: MatDialogRef<ChequeNewItComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
