import {Component, Inject} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PoViewComponent } from '../po-buttons/po-view/po-view.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { PoSpecialSplitComponent } from '../po-buttons/po-special-split/po-special-split.component';
import { PoSpecialReplenishComponent } from '../po-buttons/po-special-replenish/po-special-replenish.component';
import { PoSpecialNoCanvasComponent } from '../po-buttons/po-special-no-canvas/po-special-no-canvas.component';
import { PoCancelComponent } from '../po-buttons/po-cancel/po-cancel.component';
import { PoApproveComponent } from '../po-buttons/po-approve/po-approve.component';
import { PoPrintComponent } from '../po-buttons/po-print/po-print.component';
import { PoSendComponent } from '../po-buttons/po-send/po-send.component';
import { PoPendComponent } from '../po-buttons/po-pend/po-pend.component';
import { PoPostComponent } from '../po-buttons/po-post/po-post.component';


const Entered_Data: displayedEntered[] = [
  {PON: 1, PoDate: 'Sunday', CanvNo: 1.0079, Supplier: 'H', Status:'True', butt: '', sel: ''},
  {PON: 2, PoDate: 'Sunday', CanvNo: 4.0026, Supplier: 'He', Status:'True', butt: '', sel: ''},
  {PON: 3, PoDate: 'Sunday', CanvNo: 6.941, Supplier: 'Li', Status:'True', butt: '', sel: ''},

];
const Posted_Data: displayedPosted[] = [
  {PON: 1, PoDate: 'Friday', CanvNo: 1.0079, Supplier: 'H', Status:'True', butt: '', sel: ''},
  {PON: 2, PoDate: 'Friday', CanvNo: 4.0026, Supplier: 'He', Status:'True', butt: '', sel: ''},
  {PON: 3, PoDate: 'Friday', CanvNo: 6.941, Supplier: 'Li', Status:'True', butt: '', sel: ''},

];
const Approved_Data: displayedApproved[] = [
  {PON: 1, PoDate: 'Friday', CanvNo: 1.0079, Supplier: 'H', Status:'True', butt: '', sel: ''},
  {PON: 2, PoDate: 'Friday', CanvNo: 4.0026, Supplier: 'He', Status:'True', butt: '', sel: ''},
  {PON: 3, PoDate: 'Friday', CanvNo: 6.941, Supplier: 'Li', Status:'True', butt: '', sel: ''},

];
const Canceled_Data: displayedCanceled[] = [
  {PON: 1, PoDate: 'Monday', CanvNo: 1.0079, Supplier: 'H', Status:'True', butt: '', sel: ''},
  {PON: 2, PoDate: 'Monday', CanvNo: 4.0026, Supplier: 'He', Status:'True', butt: '', sel: ''},
  {PON: 3, PoDate: 'Monday', CanvNo: 6.941, Supplier: 'Li', Status:'True', butt: '' , sel: ''},

];

export interface displayedEntered {
  PoDate: string;
  PON: number;
  CanvNo: number;
  Supplier: string;
  Status:string;
  butt:string;
  sel: MatRadioModule;
}

export interface displayedPosted {
  PoDate: string;
  PON: number;
  CanvNo: number;
  Supplier: string;
  Status:string;
  butt:string;
  sel: MatRadioModule;
}

export interface displayedApproved {
  PoDate: string;
  PON: number;
  CanvNo: number;
  Supplier: string;
  Status:string;
  butt:string;
  sel: MatRadioModule;
}

export interface displayedCanceled {
  PoDate: string;
  PON: number;
  CanvNo: number;
  Supplier: string;
  Status:string;
  butt:string;
  sel: MatRadioModule;
}

@Component({
  selector: 'app-purchase-comp',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatTableModule,MatButton,MatMenuModule, MatButtonModule,MatIconModule,MatRadioModule], 
  templateUrl: './purchase-comp.component.html',
  styleUrl: './purchase-comp.component.css'
})
export class PurchaseCompComponent {
  displayedEntered: string[] = ['PON', 'PoDate', 'CanvNo', 'Supplier', 'Status','butt','sel'];
  dataSourceEnteed = Entered_Data;

  displayedPosted: string[] = ['PON', 'PoDate', 'CanvNo', 'Supplier', 'Status','butt','sel'];
  dataSourcePosted = Posted_Data;

  displayedApproved: string[] = ['PON', 'PoDate', 'CanvNo', 'Supplier', 'Status','butt','sel'];
  dataSourceApproved = Approved_Data;

  displayedCanceled: string[] = ['PON', 'PoDate', 'CanvNo', 'Supplier', 'Status','butt','sel'];
  dataSourceCanceled = Canceled_Data;

  constructor(
    public dialog: MatDialog
  ) {}

  poView(): void {
    const dialogRef = this.dialog.open(PoViewComponent, {
      width: '610px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  noCanvas(): void {
    const dialogRef = this.dialog.open(PoSpecialNoCanvasComponent, {
      width: '900px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Replenish(): void {
    const dialogRef = this.dialog.open(PoSpecialReplenishComponent, {
      width: '900px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
  split(): void {
    const dialogRef = this.dialog.open(PoSpecialSplitComponent, {
      width: '900px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Pend(): void {
    const dialogRef = this.dialog.open(PoPendComponent, {
      width: '1000px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Post(): void {
    const dialogRef = this.dialog.open(PoPostComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Approve(): void {
    const dialogRef = this.dialog.open(PoApproveComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Cancel(): void {
    const dialogRef = this.dialog.open(PoCancelComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Print(): void {
    const dialogRef = this.dialog.open(PoPrintComponent, {
      width: '610px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Send(): void {
    const dialogRef = this.dialog.open(PoSendComponent, {
      width: '610px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}





