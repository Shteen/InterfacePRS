import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';


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
  selector: 'app-dash-rawmat-view-issu',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dash-rawmat-view-issu.component.html',
  styleUrl: './dash-rawmat-view-issu.component.css'
})
export class DashRawmatViewIssuComponent {

  
  rawMatInvColumns: string[] = ['SKU','PONumber', 'ItemName','MFG','EXP','price', 'quantity' ,'deets'];
  dataSourceRawInv = rawINv_DATA;

  constructor(
    public dialogRef: MatDialogRef<DashRawmatViewIssuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
