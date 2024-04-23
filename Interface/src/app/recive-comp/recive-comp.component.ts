import { AfterViewInit, Component, Inject, Input, ViewChild } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatTableDataSource} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { RrDetailsComponent } from '../rr-buttons/rr-details/rr-details.component';
import { MatDialog } from '@angular/material/dialog';
import { RrSubmitComponent } from '../rr-buttons/rr-submit/rr-submit.component';
import { RrBalancesComponent } from '../rr-buttons/rr-balances/rr-balances.component';
import { RrDeleteComponent } from '../rr-buttons/rr-delete/rr-delete.component';
import { RrEditComponent } from '../rr-buttons/rr-edit/rr-edit.component';
import { RrAddComponent } from '../rr-buttons/rr-add/rr-add.component';

@Component({
  selector: 'app-recive-comp',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule, 
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
   ],
  templateUrl: './recive-comp.component.html',
  styleUrl: './recive-comp.component.css'
})
export class ReciveCompComponent {
  displayedColumns: string[] = ['rr', 'rrdate', 'pono', 'rrstatus','select'];
  dataSource = ELEMENT_DATA;


  constructor(
    public dialog: MatDialog
  ) {}

  viewDetails(): void {
    const dialogRef = this.dialog.open(RrDetailsComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  rradd(): void {
    const dialogRef = this.dialog.open(RrAddComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  rrEdit(): void {
    const dialogRef = this.dialog.open(RrEditComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  rrDelete(): void {
    const dialogRef = this.dialog.open(RrDeleteComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  rrSubmit(): void {
    const dialogRef = this.dialog.open(RrSubmitComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
}

export interface RRData {
  rr: number;
  rrdate: string;
  pono: number;
  rrstatus: string;
  select: MatRadioModule;
}

const ELEMENT_DATA: RRData[] = [
  {rr: 1, rrdate: 'Hydrogen', pono: 1.0079, rrstatus: 'H', select: '',},
  {rr: 2, rrdate: 'Helium', pono: 4.0026, rrstatus: 'He', select: '',},
  {rr: 3, rrdate: 'Lithium', pono: 6.941, rrstatus: 'Li', select: '',},
  {rr: 5, rrdate: 'Boron', pono: 10.811, rrstatus: 'B', select: '',},
  {rr: 6, rrdate: 'Carbon', pono: 12.0107, rrstatus: 'C', select: '',},
  {rr: 7, rrdate: 'Nitrogen', pono: 14.0067, rrstatus: 'N', select: '',},
  {rr: 8, rrdate: 'Oxygen', pono: 15.9994, rrstatus: 'O', select: '',},
  {rr: 9, rrdate: 'Fluorine', pono: 18.9984, rrstatus: 'F', select: '',},
  {rr: 10, rrdate: 'Neon', pono: 20.1797, rrstatus: 'Ne', select: '',},
  {rr: 11, rrdate: 'Sodium', pono: 22.9897, rrstatus: 'Na', select: '',},
]

