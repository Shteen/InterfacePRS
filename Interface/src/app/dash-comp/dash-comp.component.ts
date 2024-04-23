import { Component, Inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DashRawmatViewComponent } from './dashview/dash-rawmat-view/dash-rawmat-view.component';


export interface InTransitList {
  SKU: number;
  PON: string;
  Details: string;
  MFG: string;
  EXP: string;
  Class: MatButtonModule;
  Status: string;
  Deliv: string;
  qty: number;
}


export interface InventoryListRaw {
  SKU: number;
  ItemName: string;
  UM: string;
  price: number;
  quantity: number;
  Incoming:number;
  deets:MatButtonModule;
  
}

export interface FinishedPList{
  SKU: number;
  ItemName: string;
  MFG: string;
  EXP: string;
  quantity: number;
  deets: MatButtonModule;
}

const intransit_DATA: InTransitList[] = [
  {SKU: 1, PON:'4669479', Details: 'Dried Beans', MFG: 'jan 1, 2024', EXP:'jan 1, 2025' , Class:'', Status:'To recive', Deliv:'jan 3, 2024', qty:500},

];

const rawINv_DATA: InventoryListRaw [] = [
  {SKU: 1, ItemName: 'Black Beans',UM: 'PC', price:1500 ,quantity: 200, Incoming:500, deets:''},

];

const rawFin_DATA: FinishedPList[]= [
  {SKU: 1, ItemName: 'Hydrogen', MFG: 'jan 1, 2024', EXP:'jan 1, 2025' ,quantity: 500, deets:''}
]




@Component({
  selector: 'app-dash-comp',
  standalone: true,
  imports: [
    MatTableModule, MatCardModule, MatTabsModule,MatButtonModule, MatIconModule,MatDialogModule

  ],
  templateUrl: './dash-comp.component.html',
  styleUrl: './dash-comp.component.css'
})


export class DashCompComponent {

  openDialog() {
  throw new Error('Method not implemented.');
  }
  
  intranstiColumns: string[] = ['SKU', 'PON', 'Details', 'MFG', 'EXP', 'Class', 'Status', 'Deliv','qty'];
  dataSourceTransit = intransit_DATA;

  rawMatInvColumns: string[] = ['SKU', 'ItemName','UM','price', 'quantity','Incoming' ,'deets',];
  dataSourceRawInv = rawINv_DATA;

  finishedGColumns: string[] = ['SKU', 'ItemName', 'MFG', 'EXP', 'quantity', 'deets',];
  dataSourcefinished = rawFin_DATA;


  constructor(public dialog: MatDialog) {}

  openRawDeets(): void {
    const dialogRef = this.dialog.open(DashRawmatViewComponent, {
      width: '1000px',
      height: 'auto',
      maxHeight: '90vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
 }
}
