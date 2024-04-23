import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-cheque-new-sub',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cheque-new-sub.component.html',
  styleUrl: './cheque-new-sub.component.css'
})
export class ChequeNewSubComponent {

  constructor(
    public dialogRef: MatDialogRef<ChequeNewSubComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
