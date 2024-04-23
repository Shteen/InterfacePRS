import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RrBalanceAddComponent } from '../rr-balance-add/rr-balance-add.component';
import { MaterialModule } from '../../material/material.module';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, NgModel, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { RrBalanceAddRemoveComponent } from '../rr-add-buttons/rr-balance-add-remove/rr-balance-add-remove.component';
import { RrBalanceAddEditComponent } from '../rr-add-buttons/rr-balance-add-edit/rr-balance-add-edit.component';
import { RrBalanceAddBalanceComponent } from '../rr-add-buttons/rr-balance-add-balance/rr-balance-add-balance.component';
import { RrBalanceAddAddComponent } from '../rr-add-buttons/rr-balance-add-add/rr-balance-add-add.component';
import { MatTable } from '@angular/material/table';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { __values } from 'tslib';
import {JsonPipe} from '@angular/common';


export interface PeriodicElement {
  dno: number;
  des: string;
  brand: string;
  serial: string;
  id:string;
  um:string;
  qty:number;
  unitC: number;
  tCosst:number;
  discount:number;
  vat:number;
  net:number;
  sel:MatRadioModule;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {sel:'',dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {sel:'',dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {sel:'',dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {sel:'',dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},
  {sel:'',dno: 1, des: 'Hydrogen', brand: 'mcdo', serial: 'H', id:'1', um:'PC',qty:6,unitC:5, tCosst:30, discount:0, vat:0, net:60,},

];

@Component({
  selector: 'app-rr-add',
  standalone: true,
  imports: [MaterialModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    JsonPipe],
  templateUrl: './rr-add.component.html',
  styleUrl: './rr-add.component.css',
  
  providers: [provideNativeDateAdapter()],
  
})
export class RrAddComponent {

  constructor(
    public dialogRef: MatDialogRef<RrBalanceAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    

  ) {}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  rrBalanceAdd(): void {
    const dialogRef = this.dialog.open(RrBalanceAddComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  

  
  displayedColumns: string[] = ['sel','dno', 'des', 'brand', 'serial','id','um','qty', 'unitC', 'tCosst','discount','vat','net',];
  dataSource = ELEMENT_DATA;
  

  rrBalanceAddAdd(): void {
    const dialogRef = this.dialog.open(RrBalanceAddAddComponent, {
      width: '750px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  rrBalanceAddBalance(): void {
    const dialogRef = this.dialog.open(RrBalanceAddBalanceComponent, {
      width: '1500px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  rrBalanceAddEdit(): void {
    const dialogRef = this.dialog.open(RrBalanceAddEditComponent, {
      width: '750px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  remove = this._formBuilder.group({
    remove:false,
  })


  doSomething(event:any){
  
    if(event.target.checked==true){
      
    }
    else{
      console.log('checkbox is unchecked');
    }
  }

  rrBalanceAddRemove(event:any): void {
    if (event.target.checked ==true ){

      this.dataSource.pop();
      this.table.renderRows();

    }
  }

}
