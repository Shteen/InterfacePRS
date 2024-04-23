import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';



export interface PeriodicElement {
  propNo: string;
  iDes: string;
  brand: string;
  serialNo: string;
  nOfItems: string;
  um: string;
  cases: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {propNo: '1', iDes: 'item description', brand:"item brand", serialNo: '62496510654',nOfItems: '1', um:'PC', cases:'1'},
  {propNo: '2', iDes: 'item description', brand:"item brand", serialNo: '12424152412',nOfItems: '2', um:'PC', cases:'1'},
  {propNo: '3', iDes: 'item description', brand:"item brand", serialNo: '09549849498',nOfItems: '3', um:'PC', cases:'1'},
  {propNo: '4', iDes: 'item description', brand:"item brand", serialNo: '89751695461',nOfItems: '4', um:'PC', cases:'1'},
  {propNo: '5', iDes: 'item description', brand:"item brand", serialNo: '04843987984',nOfItems: '5', um:'PC', cases:'1'},
  {propNo: '6', iDes: 'item description', brand:"item brand", serialNo: '65194984694',nOfItems: '5', um:'PC', cases:'1'},
  {propNo: '7', iDes: 'item description', brand:"item brand", serialNo: '24987984487',nOfItems: '5', um:'PC', cases:'1'},
  {propNo: '8', iDes: 'item description', brand:"item brand", serialNo: '98743254658',nOfItems: '5', um:'PC', cases:'1'},
];

@Component({
  selector: 'app-ts-details',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MaterialModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    
        
  ],
  templateUrl: './ts-details.component.html',
  styleUrl: './ts-details.component.css'
})
export class TSDetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<TSDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  date: any;


  displayedColumns: string[] = ['propNo', 'iDes', 'brand', 'serialNo','nOfItems','um','cases'];
  dataSource = ELEMENT_DATA;


  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

}
