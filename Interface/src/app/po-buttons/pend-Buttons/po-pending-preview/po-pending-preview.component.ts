import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-po-pending-preview',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './po-pending-preview.component.html',
  styleUrl: './po-pending-preview.component.css'
})
export class PoPendingPreviewComponent {

  constructor(
    public dialogRef: MatDialogRef<PoPendingPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
