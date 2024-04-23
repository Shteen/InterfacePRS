import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  selector: 'app-po-special-split',
  standalone: true,
  imports: [MaterialModule, MatRadioModule],
  templateUrl: './po-special-split.component.html',
  styleUrl: './po-special-split.component.css'
})
export class PoSpecialSplitComponent {

  displayedColumns: string[] = ['dno', 'des', 'um', 'qty','UCb','UCw','net','tcost'];
  dataSource = ELEMENT_DATA;


  constructor(
    public dialogRef: MatDialogRef<PoSpecialSplitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
