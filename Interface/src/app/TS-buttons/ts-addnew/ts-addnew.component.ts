import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { TsAddItemComponent } from '../TSitems/ts-add-item/ts-add-item.component';
import { TsDelItemComponent } from '../TSitems/ts-del-item/ts-del-item.component';
import { MatRadioModule } from '@angular/material/radio';
import { TsAddItemRepComponent } from '../TSitems/ts-add-item-rep/ts-add-item-rep.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

export interface PeriodicElement {
  propNo: string;
  iDes: string;
  brand: string;
  serialNo: string;
  nOfItems: string;
  um: string;
  cases: string;
  sel:MatRadioModule;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {propNo: '1', iDes: 'item description', brand:"item brand", serialNo: '62496510654',nOfItems: '1', um:'PC', cases:'1', sel: ''},
  {propNo: '2', iDes: 'item description', brand:"item brand", serialNo: '12424152412',nOfItems: '2', um:'PC', cases:'1', sel: ''},
  {propNo: '3', iDes: 'item description', brand:"item brand", serialNo: '09549849498',nOfItems: '3', um:'PC', cases:'1', sel: ''},
  {propNo: '4', iDes: 'item description', brand:"item brand", serialNo: '89751695461',nOfItems: '4', um:'PC', cases:'1', sel: ''},
  {propNo: '5', iDes: 'item description', brand:"item brand", serialNo: '04843987984',nOfItems: '5', um:'PC', cases:'1', sel: ''},
  {propNo: '6', iDes: 'item description', brand:"item brand", serialNo: '65194984694',nOfItems: '5', um:'PC', cases:'1', sel: ''},
  {propNo: '7', iDes: 'item description', brand:"item brand", serialNo: '24987984487',nOfItems: '5', um:'PC', cases:'1', sel: ''},
  {propNo: '8', iDes: 'item description', brand:"item brand", serialNo: '98743254658',nOfItems: '5', um:'PC', cases:'1', sel: ''},
];


@Component({
  selector: 'app-ts-addnew',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule,
    MatRadioModule,
    MatDatepickerModule,
    
  ],
  templateUrl: './ts-addnew.component.html',
  styleUrl: './ts-addnew.component.css'
  
})
export class TSAddnewComponent {
date: any;

  constructor(
    public dialogRef: MatDialogRef<TSAddnewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  displayedColumns: string[] = ['propNo', 'iDes', 'brand', 'serialNo','nOfItems','um','cases', 'sel'];
  dataSource = ELEMENT_DATA;


  addItem(): void {
    const dialogRef = this.dialog.open(TsAddItemComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  delItem(): void {
    const dialogRef = this.dialog.open(TsDelItemComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addItemRep(): void {
    const dialogRef = this.dialog.open(TsAddItemRepComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
