import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';

import { CanvasAddButtAddItemComponent } from '../canv-butt-items/canvas-add-butt-add-item/canvas-add-butt-add-item.component';
import { MatDialog,  } from '@angular/material/dialog';
import { CanvasAddButtDelItemComponent } from '../canv-butt-items/canvas-add-butt-del-item/canvas-add-butt-del-item.component';



export interface PeriodicElement {
  dno: number;
  desc: string;
  um: string;
  qty: number;
  unitc1: number;
  totalc1:number;
  unitc2: number;
  totalc2:number;
  unitc3: number;
  totalc3:number;
  select:MatRadioModule;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {dno: 1, desc: 'Hydrogen', um: 'PC', qty: 2 , unitc1: 4, totalc1: 4,  unitc2: 4, totalc2: 4, unitc3: 4, totalc3: 4, select: ''  },
  {dno: 2, desc: 'Helium', um: 'PC', qty: 2 , unitc1: 5, totalc1: 4,  unitc2: 4, totalc2: 4, unitc3: 4, totalc3: 4,select: ''},
  {dno: 3, desc: 'Lithium', um: 'PC', qty: 2 , unitc1: 9, totalc1: 4,  unitc2: 4, totalc2: 4, unitc3: 4, totalc3: 4,select: ''},
  {dno: 4, desc: 'Beryllium', um: 'PC', qty: 2 , unitc1: 7,totalc1: 4,  unitc2: 4, totalc2: 4, unitc3: 4, totalc3: 4,select:'' },
  {dno: 5, desc: 'Boron', um: 'PC', qty: 2 , unitc1: 10,totalc1: 4,  unitc2: 4, totalc2: 4, unitc3: 4, totalc3: 4,select: ''},
  {dno: 6, desc: 'Carbon', um: 'PC', qty: 2 , unitc1: 8,totalc1: 4,  unitc2: 4, totalc2: 4, unitc3: 4, totalc3: 4,select:'' },
  {dno: 7, desc: 'Nitrogen', um: 'PC', qty: 2 , unitc1: 1,totalc1: 4,  unitc2: 4, totalc2: 4, unitc3: 4, totalc3: 4,select: ''},
  {dno: 8, desc: 'Oxygen', um: 'PC', qty: 2 , unitc1: 6,totalc1: 4,  unitc2: 4, totalc2: 4, unitc3: 4, totalc3: 4,select:'' },
  {dno: 9, desc: 'Fluorine', um: 'PC', qty: 2 , unitc1: 2, totalc1: 4,  unitc2: 4, totalc2: 4, unitc3: 4, totalc3: 4,select: ''},
  {dno: 10, desc: 'Neon', um: 'PC', qty: 2 , unitc1: 3, totalc1: 4,  unitc2: 4, totalc2: 4, unitc3: 4, totalc3: 4,select: ''},
];


@Component({
  selector: 'app-canvas-details',
  standalone: true,
  imports: [
    MaterialModule,MatRadioButton,MatRadioModule, 
  ],
  templateUrl: './canvas-details.component.html',
  styleUrl: './canvas-details.component.css'
})
export class CanvasDetailsComponent {


  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CanvasDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns: string[] = ['dno', 'desc', 'um', 'qty', 'unitc1', 'totalc1', 'totalc2', 'unitc3', 'totalc3', 'select']; 
  dataSource = ELEMENT_DATA;



  
  openAddItem(): void {
    const dialogRef = this.dialog.open(CanvasAddButtAddItemComponent,{
      width: '1000px',
      height: '600px',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



  openDelItem(): void {
    const dialogRef = this.dialog.open(CanvasAddButtDelItemComponent,{
      width: 'Auto',
      height: 'Auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}