import { Component, ElementRef, Inject, OnInit, ViewChild, input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CanvasAddButtAddItemComponent } from '../canv-butt-items/canvas-add-butt-add-item/canvas-add-butt-add-item.component';
import { MatDialog, } from '@angular/material/dialog';
import { CanvasAddButtDelItemComponent } from '../canv-butt-items/canvas-add-butt-del-item/canvas-add-butt-del-item.component';
import { CanvasService } from '../../services/canvas-service-folder/canvas.service';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { SuppListComponentComponent } from '../supp-list-component/supp-list-component.component';
import { SupplierServiceService } from '../../services/supplier-service-folder/supplier-service.service';
import { end } from '@popperjs/core';
import { BrandService } from '../../services/brand-folder/brand.service';
import { ItemsWService } from '../../services/items-w-service-folder/items-w.service';


@Component({
  selector: 'app-canvas-edit',
  standalone: true,
  imports: [
    MaterialModule, MatRadioButton, MatRadioModule,
  ],
  templateUrl: './canvas-edit.component.html',
  styleUrl: './canvas-edit.component.css'
})

export class CanvasEditComponent implements OnInit {
  displayedColumns: string[] = ['dno', 'desc', 'brnd', 'um', 'qty', 'unitc1', 'totalc1', 'select'];
  suppCol: string[] = ['cvsno', 'itemDes', 'dateOrder', 'status', 'select'];
  suptabb!: MatTableDataSource<any>;
  ListItem!: MatTableDataSource<any>;
  canvasDetails!: FormGroup
  canvD!:FormGroup
  suppDetails: FormGroup
  itemsW!: FormGroup
  brand!: FormGroup
  val: any;
  item: any = [];
  itemSupp: any = [];
  brndItem: any = [];
  canvI: any = [];
  Wiitems: any = [];
  updateText = new FormControl('');


  constructor(
    public dialog: MatDialog, public dialogRef:
      MatDialogRef<CanvasEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private canvasService: CanvasService,
    private SupplierService: SupplierServiceService,
    private datepipe: DatePipe,
    private canvasFb: FormBuilder,
    private ItemsWServ: ItemsWService,
    private itemFB: FormBuilder,
    private BrandServ: BrandService,
    private BrandFB: FormBuilder,

    private suppFB: FormBuilder) {
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
    }),

      this.suppDetails = this.suppFB.group({
        supplierName: [''],
        supno: 0,
        number1: 0,
        keyperson: [''],
        terms: 0
      })

    this.itemsW = this.itemFB.group({

      id: [''],
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
      id: [''],
      brandNumber: [''],
      brandName: ['']

    })





  }



  ngOnInit(): void {
    console.log(this.canvasDetails);
    this.getCanvasList();


    this.canvasDetails.patchValue(this.data);
    this.canvasService.currentItem.subscribe((item) => {

      this.canvI = item;
      this.canvasDetails.patchValue(this.canvI);
      const totalVal = this.canvI.get('total')?.value;
      const qtyVal = this.canvI.get('qty')?.value;
      this.canvasDetails.get('qty')?.setValue(qtyVal);
      this.canvasDetails.get('total')?.setValue(totalVal);
    });

    this.suppDetails.patchValue(this.data);
    this.SupplierService.currentItem.subscribe((item) => {

      this.itemSupp = item;
      this.suppDetails.patchValue(this.itemSupp);
    });

    this.brand.patchValue(this.data)
    this.BrandServ.currentItem.subscribe((item) => {

      this.brndItem = item;
      this.brand.patchValue(this.brndItem)
      const brandVal = this.brand.get('brandName')?.value;
      this.canvasDetails.get('brandName')?.setValue(brandVal);
    })

    this.itemsW.patchValue(this.data)
    this.ItemsWServ.currentItem.subscribe((item) => {

      this.Wiitems = item;
      this.itemsW.patchValue(this.Wiitems)

    const categoryCodeVal = this.itemsW.get('categoryCode')?.value;
    const eIitemVal = this.itemsW.get('eIitem')?.value;
    const itemNameVal = this.itemsW.get('itemName')?.value;
    const descriptionItemVal = this.itemsW.get('descriptionItem')?.value;
    const dnonumberVal = this.itemsW.get('dnonumber')?.value;
    const taxrateVal = this.itemsW.get('taxrate')?.value;
    const umpcVal = this.itemsW.get('umpc')?.value;
    const costPCVal = this.itemsW.get('costPC')?.value;
    const umcsVal = this.itemsW.get('umcs')?.value;
    const costCSVal = this.itemsW.get('costCS')?.value;
    const pccsVal = this.itemsW.get('pccs')?.value;
    this.canvasDetails.get('categoryCode')?.setValue(categoryCodeVal);
    this.canvasDetails.get('eIitem')?.setValue(eIitemVal);
    this.canvasDetails.get('itemName')?.setValue(itemNameVal);
    this.canvasDetails.get('descriptionItem')?.setValue(descriptionItemVal);
    this.canvasDetails.get('dnonumber')?.setValue(dnonumberVal);
    this.canvasDetails.get('taxrate')?.setValue(taxrateVal);
    this.canvasDetails.get('umpc')?.setValue(umpcVal);
    this.canvasDetails.get('costPC')?.setValue(costPCVal);
    this.canvasDetails.get('umcs')?.setValue(umcsVal);
    this.canvasDetails.get('costCS')?.setValue(costCSVal);
    this.canvasDetails.get('pccs')?.setValue(pccsVal);
    
    })

    

  }




  getCanvasList() {
    this.canvasDetails.patchValue(this.data);
    (val: any[]) => {
      val.forEach(item => { });
      this.ListItem = new MatTableDataSource(val);
    }

  }




  onFormSubmit() {
    if (this.canvasDetails.valid) {
      if (this.data) {
        console.log('Data:', this.data.id);
        this.canvasService
          .updateCanvas(this.data.id, this.canvasDetails.value)
          .subscribe({
            next: (val: any) => {
              console.log('Updated data:', this.data);
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } 
    }
  }







  openAddItem(): void {
    const dialogRef = this.dialog.open(CanvasAddButtAddItemComponent, {
      width: '800px',
      height: '600px',
      maxHeight: '90vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  testBut(){
    this.canvasDetails.reset();
    this.brand.reset();
    this.itemsW.reset();
    this.suppDetails.reset();
  }


  openDelItem(): void {
    console.log(this.canvasDetails);
    console.log(this.brand);
    

  }

  suppList(): void {
    const dialogRef = this.dialog.open(SuppListComponentComponent, {
      width: '1200px',
      height: '500px',
      maxHeight: '90vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  clearCanv(){
    this.canvasDetails.reset();
    this.brand.reset();
    this.itemsW.reset();
    this.suppDetails.reset();
    this.data = [null];
    this.canvI = [null];
    this.Wiitems = [null];

    this.ItemsWServ.saveItem(this.item);
    this.canvasService.saveItem(this.item);
    this.BrandServ.saveItem(this.item);

    this.dialogRef.close();
    


}
}