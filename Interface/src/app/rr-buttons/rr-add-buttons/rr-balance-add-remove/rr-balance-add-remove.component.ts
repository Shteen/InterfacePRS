import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-rr-balance-add-remove',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rr-balance-add-remove.component.html',
  styleUrl: './rr-balance-add-remove.component.css'
})
export class RrBalanceAddRemoveComponent {

  constructor(
    public dialogRef: MatDialogRef<RrBalanceAddRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}



}
