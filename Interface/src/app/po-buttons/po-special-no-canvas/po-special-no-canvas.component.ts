import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
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
  selector: 'app-po-special-no-canvas',
  standalone: true,
  imports: [MaterialModule, MatRadioModule],
  templateUrl: './po-special-no-canvas.component.html',
  styleUrl: './po-special-no-canvas.component.css'
})
export class PoSpecialNoCanvasComponent {

  displayedColumns: string[] = ['dno', 'des', 'um', 'qty','UCb','UCw','net','tcost'];
  dataSource = ELEMENT_DATA;

  disableAmount = new FormControl(true);

  constructor(
    public dialogRef: MatDialogRef<PoSpecialNoCanvasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
