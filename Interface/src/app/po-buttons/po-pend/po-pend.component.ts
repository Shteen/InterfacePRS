import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { PoPendingDetsComponent } from '../pend-Buttons/po-pending-dets/po-pending-dets.component';
import { PoPendingCancelComponent } from '../pend-Buttons/po-pending-cancel/po-pending-cancel.component';
import { PoPendingPreviewComponent } from '../pend-Buttons/po-pending-preview/po-pending-preview.component';
import { PoPendingPrintComponent } from '../pend-Buttons/po-pending-print/po-pending-print.component';

export interface PeriodicElement {
  pono: string;
  podate: string;
  cvaNo: string;
  Docdate: string;
  supNO: string;
  supName: string;
  remarks: string;
  radio: MatRadioModule;
  sel:MatButtonModule;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {pono: '123231', podate: '1/24/24', cvaNo:'425124',Docdate: '24/2/24', supNO: '3000275', supName:'McDonalds Corporation', remarks:'wadsa', radio:'',sel:''},
  {pono: '123231', podate: '1/24/24', cvaNo:'425124',Docdate: '24/2/24', supNO: '3000275', supName:'McDonalds Corporation', remarks:'wadsa', radio:'',sel:''},
  {pono: '123231', podate: '1/24/24', cvaNo:'425124',Docdate: '24/2/24', supNO: '3000275', supName:'McDonalds Corporation', remarks:'wadsa', radio:'',sel:''},
];

@Component({
  selector: 'app-po-pend',
  standalone: true,
  imports: [MaterialModule, MatRadioModule],
  templateUrl: './po-pend.component.html',
  styleUrl: './po-pend.component.css'
})
export class PoPendComponent {

  displayedColumns: string[] = ['pono', 'podate', 'cvaNo', 'Docdate', 'supNO','supName', 'remarks', 'radio', 'sel'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialogRef: MatDialogRef<PoPendingDetsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
      public dialog: MatDialog
  ) {}


  poView(): void {
    const dialogRef = this.dialog.open(PoPendComponent, {
      width: '610px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  cann(): void {
    const dialogRef = this.dialog.open(PoPendingCancelComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  prin(): void {
    const dialogRef = this.dialog.open(PoPendingPrintComponent, {
      width: '610px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  prev(): void {
    const dialogRef = this.dialog.open(PoPendingPreviewComponent, {
      width: '610px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
