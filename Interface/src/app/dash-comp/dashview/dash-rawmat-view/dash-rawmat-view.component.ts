import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { DashRawmatViewIssuComponent } from '../dash-rawmat-view-issu/dash-rawmat-view-issu.component';


export interface InventoryListRaw {
  SKU: number;
  PONumber: number;
  ItemName: string;
  MFG: string;
  EXP:string;
  price: number;
  quantity: number;
  deets:MatButtonModule;
  
}

const rawINv_DATA: InventoryListRaw [] = [
  {SKU: 1, PONumber: 90446514, ItemName: 'Black Beans', MFG: 'jan 1, 2024', EXP:'jan 1, 2025' ,price:1500 ,quantity: 500, deets:''},

];


@Component({
  selector: 'app-dash-rawmat-view',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dash-rawmat-view.component.html',
  styleUrl: './dash-rawmat-view.component.css'
})

export class DashRawmatViewComponent {

  rawMatInvColumns: string[] = ['SKU','PONumber', 'ItemName','MFG','EXP','price', 'quantity' ,'deets'];
  dataSourceRawInv = rawINv_DATA;

  constructor(
    public dialogRef: MatDialogRef<DashRawmatViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  
  openRawIssu(): void {
    const dialogRef = this.dialog.open(DashRawmatViewIssuComponent, {
      width: '1000px',
      height: 'auto',
      maxHeight: '90vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
 }

}
