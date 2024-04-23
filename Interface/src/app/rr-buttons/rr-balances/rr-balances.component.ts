import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

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

}

const ELEMENT_DATA: PeriodicElement[] = [
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
];

@Component({
  selector: 'app-rr-balances',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rr-balances.component.html',
  styleUrl: './rr-balances.component.css'
})
export class RrBalancesComponent {

  constructor(
    public dialogRef: MatDialogRef<RrBalancesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns: string[] = ['dno', 'des', 'brand', 'serial','id','um','qty', 'unitC', 'tCosst','discount','vat','net'];
  dataSource = ELEMENT_DATA;
  
}
