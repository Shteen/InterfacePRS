import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-po-approve',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './po-approve.component.html',
  styleUrl: './po-approve.component.css'
})
export class PoApproveComponent {

  constructor(
    public dialogRef: MatDialogRef<PoApproveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


}
