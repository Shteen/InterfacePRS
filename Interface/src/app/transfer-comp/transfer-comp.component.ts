import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { TSAddnewComponent } from '../TS-buttons/ts-addnew/ts-addnew.component';
import { TSPrintComponent } from '../TS-buttons/ts-print/ts-print.component';
import { TSPostComponent } from '../TS-buttons/ts-post/ts-post.component';
import { TSDetailsComponent } from '../TS-buttons/ts-details/ts-details.component';
import { TSCancelComponent } from '../TS-buttons/ts-cancel/ts-cancel.component';

@Component({
  selector: 'app-transfer-comp',
  standalone: true,
  imports: [MatTableModule,MatPaginator,MatPaginatorModule,MatButtonModule,MatIconModule,MatRadioButton],
  templateUrl: './transfer-comp.component.html',
  styleUrl: './transfer-comp.component.css'
})
export class TransferCompComponent{
  displayedColumns: string[] = ['rb', 'docno', 'status', 'details','select'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  newTs(): void {
    const dialogRef = this.dialog.open(TSAddnewComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  canTs(): void {
    const dialogRef = this.dialog.open(TSCancelComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  posTs(): void {
    const dialogRef = this.dialog.open(TSPostComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  prinTs(): void {
    const dialogRef = this.dialog.open(TSPrintComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  detTs(): void {
    const dialogRef = this.dialog.open(TSDetailsComponent, {
      width: '1000px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

export interface PeriodicElement {
  rb: string;
  docno: string;
  status: string;
  details: MatButtonModule;
  select: MatRadioModule;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {rb: 'Back Office', docno: '9163251', status: 'Entered', details: '',select:''},
  {rb: 'Ram Naga', docno: '9038106', status: 'Posted', details: '',select:''},
  {rb: 'Ram Isabela', docno: '9509087', status: 'Entered', details: '',select:''},
  {rb: 'Ram Tagbilaran', docno: '9533616', status: 'Posted', details: '',select:''},
  {rb: 'Ram Legaspi', docno: '9703115', status: 'Entered', details: '',select:''},
  {rb: 'Ram Bacolod', docno: '9886403', status: 'Posted', details: '',select:''},
  {rb: 'Ram Legaspi', docno: '9263829', status: 'Entered', details: '',select:''},
  {rb: 'Ram Legaspi', docno: '9783198', status: 'Canceled', details: '',select:''},
  {rb: 'Ram Naga', docno: '9879995', status: 'Posted', details: '',select:''},
  {rb: 'Ram Isabela', docno: '9879455', status: 'Canceled', details: '',select:''},
];