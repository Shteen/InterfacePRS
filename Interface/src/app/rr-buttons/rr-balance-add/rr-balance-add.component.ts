import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { RrBalanceAddAddComponent } from '../rr-add-buttons/rr-balance-add-add/rr-balance-add-add.component';
import { RrBalanceAddBalanceComponent } from '../rr-add-buttons/rr-balance-add-balance/rr-balance-add-balance.component';
import { RrBalanceAddEditComponent } from '../rr-add-buttons/rr-balance-add-edit/rr-balance-add-edit.component';
import { RrBalanceAddRemoveComponent } from '../rr-add-buttons/rr-balance-add-remove/rr-balance-add-remove.component';


export interface PeriodicElement {
  dno: number;
  des: string;
  brand: string;
  serial: string;
  id:string;
  um:string;
  qty:number;
  unitC: number;
  tCosst:number;
  discount:number;
  vat:number;
  net:number;
  sel:MatRadioModule;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,sel:''},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,sel:''},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,sel:''},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,sel:''},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,sel:''},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,sel:''},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,sel:''},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,sel:''},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,sel:''},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,sel:''},
];

@Component({
  selector: 'app-rr-balance-add',
  standalone: true,
  imports: [MaterialModule,MatRadioModule],
  templateUrl: './rr-balance-add.component.html',
  styleUrl: './rr-balance-add.component.css'
})
export class RrBalanceAddComponent {

  constructor(
    public dialogRef: MatDialogRef<RrBalanceAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
  ) {}

  displayedColumns: string[] = ['dno', 'des', 'brand', 'serial','id','um','qty', 'unitC', 'tCosst','discount','vat','net','sel'];
  dataSource = ELEMENT_DATA;
  

  rrBalanceAddAdd(): void {
    const dialogRef = this.dialog.open(RrBalanceAddAddComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  rrBalanceAddBalance(): void {
    const dialogRef = this.dialog.open(RrBalanceAddBalanceComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  rrBalanceAddEdit(): void {
    const dialogRef = this.dialog.open(RrBalanceAddEditComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  rrBalanceAddRemove(): void {
    const dialogRef = this.dialog.open(RrBalanceAddRemoveComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
