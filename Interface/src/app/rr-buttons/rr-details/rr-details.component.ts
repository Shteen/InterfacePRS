import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { RrBalancesComponent } from '../rr-balances/rr-balances.component';

@Component({
  selector: 'app-rr-details',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rr-details.component.html',
  styleUrl: './rr-details.component.css'
})
export class RrDetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<RrDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  rrBalance(): void {
    const dialogRef = this.dialog.open(RrBalancesComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
