import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';
import {MatRadioChange, MatRadioModule} from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CanvasEditComponent } from '../../canvas-edit/canvas-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { ItemsWService } from '../../../services/items-w-service-folder/items-w.service';
import { BrandService } from '../../../services/brand-folder/brand.service';
import { BrandAddButtComponent } from '../brand-add-butt/brand-add-butt.component';
import { CanvasService } from '../../../services/canvas-service-folder/canvas.service';
import { MatTabChangeEvent } from '@angular/material/tabs';


interface brand {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-canvas-add-butt-add-item',
  standalone: true,
  imports: [
    MaterialModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,

  ],
  templateUrl: './canvas-add-butt-add-item.component.html',
  styleUrl: './canvas-add-butt-add-item.component.css'

  
})

export class CanvasAddButtAddItemComponent implements OnInit{
  displayedColumns: string[] = ['dno', 'des','select']; 
  dataSource! : MatTableDataSource<any>;
  itemtable! : MatTableDataSource<any>;
  itemsW!:FormGroup
  brand!:FormGroup
  canvD!:FormGroup
  page = 1;
  pageSize = 10;
  IteName: any= [];
  brnd!: any[];
  item:any = [];
  [x: string]: any;
  enable: any;
  totalConv = 0;

  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<CanvasEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private canvasServ:CanvasService,
    private canvFB: FormBuilder,
    private ItemsWService: ItemsWService,
    private itemFB:FormBuilder,
    private BrandServ: BrandService,
    private BrandFB: FormBuilder) {


      this.canvD = this.canvFB.group({
        qty: [''],
        total: ['']

      })

      this.itemsW = this.itemFB.group({

        id:[''],
        categoryCode: [''],
        eIitem: 0,
        itemName: [''],
        descriptionItem: [''],
        dnonumber: [''],
        taxrate: 0,
        umpc: [''],
        costPC: 0,
        umcs: [''],
        costCS: 0,
        pccs: 0

      })

      this.brand = this.BrandFB.group({
        id:[''],
        brandNumber:[''],
        brandName:['']

      })

  }



 
  ngOnInit(): void {
    this.getSupplierList();

    this.brand.patchValue(this.data);
    
      this.BrandServ.currentItem.subscribe((item) => {
        this.brnd = item;
        this.brand.patchValue(this.brnd);
      });
  }
  
  

  getSupplierList() {
    this.ItemsWService.getAllItemsW(this.page, this.pageSize).subscribe({
      next: (val: any[]) => {
        this.dataSource = new MatTableDataSource(val);
      },
      error: (err: any) => {
        console.log(err);
      }
    });

      
  }
  

  loadNextPage(): void {
    this.page++;
    this.searchList();
  }
  loadNextPrevPage(): void {
    this.page--;
    this.searchList();
  }


  saveSelected(){
    const stringConvert = this.canvD.get('qty')?.value;
    const qtyConv = parseInt(stringConvert)
    const price = this.itemsW.get('costPC')?.value
    const totalVal = price * qtyConv
    this.canvD.get('total')?.setValue(totalVal);

    this.ItemsWService.saveItem(this.item);
    this.canvasServ.saveItem(this.canvD);
    this.BrandServ.saveItem(this.item);
    
  }

  testButt(){
    

    const stringConvert = this.canvD.get('qty')?.value;
    const qtyConv = parseInt(stringConvert)
    const price = this.itemsW.get('costPC')?.value
    const taxVal = this.itemsW.get('tax')?.value
    const taxMal = taxVal / 100
    const totalValTax = taxMal * price
    const totalVal = totalValTax * qtyConv
    
    this.canvD.get('total')?.setValue(totalVal);

    this.ItemsWService.saveItem(this.item);
    this.canvasServ.saveItem(this.canvD);
    this.BrandServ.saveItem(this.item);
    console.log(this.canvD);

  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.IteName = filterValue.trim().toLowerCase();

  }

  searchList(){
    this.ItemsWService.getBySearch(this.IteName,this.page, this.pageSize).subscribe({ next: (val: any[]) => {
      this.dataSource = new MatTableDataSource(val);
        },
        error: (err: any) => {
          console.log(err);
        }});
    
  }

  
  openAddBrand(): void {
    const dialogRef = this.dialog.open(BrandAddButtComponent,{
      width: '700px',
      height: '400px',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onRadioChange(event : MatRadioChange, item : any){
    console.log('Radio button changed:', event.value);
    this.item=item;
    this.itemsW.patchValue(item)
    
  }

  onBrandChange(event : any){
    console.log('Text changed:', event.value);
    event.target.value = this.item;
    this.brand.patchValue(this.item)

  }
}


