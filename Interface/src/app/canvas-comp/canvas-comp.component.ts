import { Component,  EventEmitter,  Inject, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioButton, MatRadioChange, MatRadioModule} from '@angular/material/radio';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CanvasDetailsComponent } from '../canvas-buttons/canvas-details/canvas-details.component';
import { MaterialModule } from '../material/material.module';
import { CanvasEditComponent } from '../canvas-buttons/canvas-edit/canvas-edit.component';
import { CanvasSubmitComponent } from '../canvas-buttons/canvas-submit/canvas-submit.component';
import { CanvasDeleteComponent } from '../canvas-buttons/canvas-delete/canvas-delete.component';
import { CanvasService } from '../services/canvas-service-folder/canvas.service';
import { DatePipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { CanvasAddComponent } from '../canvas-buttons/canvas-add/canvas-add.component';





@Component({
  selector: 'app-canvas-comp',
  standalone: true,
  imports: [ MatCardModule, 
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule ,
    MatTableModule,  
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
    
  ],
  templateUrl: './canvas-comp.component.html',
  styleUrl: './canvas-comp.component.css'
})

export class CanvasCompComponent implements OnInit {
  canvasDetails!:FormGroup
  displayedColumns: string[] = ['cvsno', 'itemDes', 'dateOrder', 'status' ,'select'];
  dataSource! : MatTableDataSource<any>;
  item:any= [];
  constructor(public dialog: MatDialog, 
    private canvasService : CanvasService, 
    private datepipe:DatePipe, 
    private canvasFb : FormBuilder){
    this.canvasDetails = this.canvasFb.group({
      id: [''],
      cvsno: [''],
      factory: [''],
      dateOrder: [''],
      company: [''],
      department: [''],
      reqDescript: [''],
      reqBy: [''],
      type: [''],
      ppe: [''],
      remarks: [''],
      ei: [''],
      supplierName: [''],
      supno: 0,
      number1: 0,
      keyperson: [''],
      terms: [''],
      categoryCode: [''],
      catDesc: [''],
      eIitem: 0,
      dnoType: [''],
      itemName: [''],
      descriptionItem: [''],
      dnonumber: [''],
      taxrate: 0,
      umpc: [''],
      costPC: 0,
      umcs: [''],
      costCS: 0,
      pccs: 0,
      qty: [''],
      total: [''],
      status: [''],
      brandName: ['']
    })
  }
  ngOnInit(): void {
    this.getCanvasList();
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CanvasDetailsComponent, {
      width: 'auto',
      height: '600px',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openDelDialog(): void {
    const dialogRef = this.dialog.open(CanvasDeleteComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openSubmitDialog(): void {
    const dialogRef = this.dialog.open(CanvasSubmitComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openEditDialog(): void {
    const dialogRef = this.dialog.open(CanvasEditComponent, {
      width: '1100px',
      height: '600px',
      maxHeight: '90vw',
      data:this.item,
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  CanvasAddComponent(): void {
    const dialogRef = this.dialog.open(CanvasAddComponent, {
      width: '1100px',
      height: '600px',
      maxHeight: '90vw',
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
  getCanvasList() {
    this.canvasService.getAllCanvas().subscribe({
      next: (val: any[]) => {
        // Iterate over each item in the array
        val.forEach(item => {
          // Assuming dateOrder is a property of each item
          item.dateOrder = this.datepipe.transform(item.dateOrder, 'MM/dd/yyyy');
          
        });
  
        this.dataSource = new MatTableDataSource(val);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  onRadioChange(event : MatRadioChange, item : any){
    console.log('Radio button changed:', event.value);
    this.item=item;
    this.canvasDetails.patchValue(item)
    console.log(this.canvasDetails);
  }


  itemsW: string=''

}







