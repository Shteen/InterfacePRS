import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface PeriodicElement {
  dno: string;
  des: string;
  um: string;
  qty: number;
  UCb: number;
  UCw: number;
  net: number;
  tcost: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {dno: '1231231', des:'this is an item', um: 'PC', qty: 3, UCb: 0.157, UCw: 0.245, net:12.512, tcost: 69,},
  {dno: '1231231', des:'this is an item', um: 'PC', qty: 3, UCb: 0.157, UCw: 0.245, net:12.512, tcost: 69,},
  {dno: '1231231', des:'this is an item', um: 'PC', qty: 3, UCb: 0.157, UCw: 0.245, net:12.512, tcost: 69,},

]

@Component({
  selector: 'app-po-pending-dets',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './po-pending-dets.component.html',
  styleUrl: './po-pending-dets.component.css'
})
export class PoPendingDetsComponent {


  
  displayedColumns: string[] = ['dno', 'des', 'um', 'qty','UCb','UCw','net','tcost'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialogRef: MatDialogRef<PoPendingDetsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

}
