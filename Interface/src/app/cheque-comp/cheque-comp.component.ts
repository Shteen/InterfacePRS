import { Component,Inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MaterialModule } from '../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { ChequePrintComponent } from '../cheque-butons/cheque-print/cheque-print.component';
import { ChequeNewItComponent } from '../cheque-butons/cheque-new-it/cheque-new-it.component';
import { ChequeNewOthersComponent } from '../cheque-butons/cheque-new-others/cheque-new-others.component';
import { ChequeNewSubComponent } from '../cheque-butons/cheque-new-sub/cheque-new-sub.component';

export interface PeriodicElement {
  cprepno: string;
  pono: string;
  Payee: string;
  Amount: string;
  ReqBy: string;
  Dept: string;
  CrepDate: string;
  edit: MatButtonModule;
  sell: MatRadioModule;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cprepno: '1',pono: '41212311' , Payee:'adam', Amount: '412424' , ReqBy:'Jhon', Dept:'IT', CrepDate: 'jan 24, 2024',edit:'' ,  sell: ''},
  {cprepno: '1',pono: '41212311' , Payee:'adam', Amount: '412424' , ReqBy:'Jhon', Dept:'IT', CrepDate: 'jan 24, 2024',edit:'' ,  sell: ''},
  {cprepno: '1',pono: '41212311' , Payee:'adam', Amount: '412424' , ReqBy:'Jhon', Dept:'IT', CrepDate: 'jan 24, 2024',edit:'' , sell: ''},
];



@Component({
  selector: 'app-cheque-comp',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,MatTabsModule,MatTableModule, MatCardModule,MatButtonModule,MaterialModule,MatRadioModule],
  templateUrl: './cheque-comp.component.html',
  styleUrl: './cheque-comp.component.css'
})
export class ChequeCompComponent {
  displayedColumns: string[] = ['cprepno', 'pono', 'Payee', 'Amount', 'ReqBy', 'Dept','CrepDate','edit', 'sell'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog
  ) {}

  newIt(): void {
    const dialogRef = this.dialog.open(ChequeNewItComponent, {
      width: '610px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  newSub(): void {
    const dialogRef = this.dialog.open(ChequeNewSubComponent, {
      width: '610px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  newOthers(): void {
    const dialogRef = this.dialog.open(ChequeNewOthersComponent, {
      width: '610px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  prnChq(): void {
    const dialogRef = this.dialog.open(ChequePrintComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
