import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';


export interface PeriodicElement {
  dno: string;
  des: string;
  brand: string;
  um: string;
  oQty: number;
  rQty: number;
  bQty: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {dno: '123', des: 'Hydrogen', brand: 'asd', um: 'PC',oQty:2, rQty:5, bQty:3},
];

@Component({
  selector: 'app-rr-balance-add-balance',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rr-balance-add-balance.component.html',
  styleUrl: './rr-balance-add-balance.component.css'
})
export class RrBalanceAddBalanceComponent {

  displayedColumns: string[] = ['dno', 'des', 'brand', 'um','oQty','rQty','bQty'];
  dataSource = ELEMENT_DATA;
}
