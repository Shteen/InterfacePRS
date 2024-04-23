import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { MatRadioModule } from '@angular/material/radio';

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
  selector: 'app-po-special-replenish',
  standalone: true,
  imports: [MaterialModule, MatRadioModule],
  templateUrl: './po-special-replenish.component.html',
  styleUrl: './po-special-replenish.component.css'
})
export class PoSpecialReplenishComponent {

  displayedColumns: string[] = ['dno', 'des', 'um', 'qty','UCb','UCw','net','tcost'];
  dataSource = ELEMENT_DATA;



  constructor(
    public dialogRef: MatDialogRef<PoSpecialReplenishComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
