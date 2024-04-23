import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-cheque-new-others',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cheque-new-others.component.html',
  styleUrl: './cheque-new-others.component.css'
})
export class ChequeNewOthersComponent {

  constructor(
    public dialogRef: MatDialogRef<ChequeNewOthersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
