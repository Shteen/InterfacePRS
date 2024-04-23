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
import { Form, FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { SuppListComponentComponent } from '../supp-list-component/supp-list-component.component';
import { SupplierServiceService } from '../../services/supplier-service-folder/supplier-service.service';
import { end } from '@popperjs/core';
import { BrandService } from '../../services/brand-folder/brand.service';
import { ItemsWService } from '../../services/items-w-service-folder/items-w.service';


@Component({
  selector: 'app-canvas-add',
  standalone: true,
  imports: [
    MaterialModule, MatRadioButton, MatRadioModule,
  ],
  templateUrl: './canvas-add.component.html',
  styleUrl: './canvas-add.component.css'
})

export class CanvasAddComponent implements OnInit {
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
  dataSource! : MatTableDataSource<any>;
  canvasCompare: any[] = [];
  maxNumber = 0;
  Posting!: FormGroup
  CanBas!: FormGroup

  constructor(
    public dialog: MatDialog, public dialogRef:
      MatDialogRef<CanvasAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private canvasService: CanvasService,
    private SupplierService: SupplierServiceService,
    private datepipe: DatePipe,
    private canvasFb: FormBuilder,
    private ItemsWServ: ItemsWService,
    private itemFB: FormBuilder,
    private BrandServ: BrandService,
    private BrandFB: FormBuilder,
    private posterFB: FormBuilder,

    private suppFB: FormBuilder) {
    this.canvasDetails = this.canvasFb.group({
      cvsno: [''],
      factory: [''],
      dateOrder: [null],
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


    this.Posting = this.posterFB.group({
      id: [''],
      cvsno: [''],
      factory: [''],
      dateOrder: [null],
      company: [''],
      department: [''],
      reqDescript: [''],
      reqBy: [''],
      type: [''],
      ppe: Boolean,
      remarks: [''],
      ei: [''],
      supno: null,
      itemName: [''],
      qty: [''],
      total: [''],
      status: [''],
      brandName: ['']
    })


  }



  ngOnInit(): void {


    console.log("data", this.data)
    this.Posting.patchValue(this.data)
    console.log(this.Posting)
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

    

    this.setValue();
  }


 newCanvID(){
  this.canvasService.getAllCanvas().subscribe({
    next: (val: any[]) => {
      // Iterate over each item in the array
      val.forEach(item => {
        const cvsNumber = item.cvsno
        const number = parseInt(cvsNumber)
        this.canvasCompare.push(number)
        for (let i = 1; i < this.canvasCompare.length; i++) {
          if (this.canvasCompare[i] > this.maxNumber) {
            this.maxNumber = this.canvasCompare[i];  // Update maxNumber if a larger number is found
          }
          

        }
          
      });
          console.log(this.maxNumber, 'test 5');
          const newCanvasNumber = this.maxNumber + 1
          this.canvasDetails.get('cvsno')?.setValue(newCanvasNumber)
        },
        error: (err: any) => {
          console.log(err);
        }
      });

 }




 setValue(){
    const cvsnoVal = this.canvasDetails.get('cvsno')?.value
    const factoryVal = this.canvasDetails.get('factory')?.value
    const dateOrderoVal = this.canvasDetails.get('dateOrder')?.value
    const companyVal = this.canvasDetails.get('company')?.value
    const departmentVal = this.canvasDetails.get('department')?.value
    const reqDescriptVal = this.canvasDetails.get('reqDescript')?.value
    const reqByVal = this.canvasDetails.get('reqBy')?.value
    const typeVal = this.canvasDetails.get('type')?.value
    const ppeVal = this.canvasDetails.get('ppe')?.value
    const remarksVal = this.canvasDetails.get('remarks')?.value
    const eiVal = this.canvasDetails.get('ei')?.value
    const itemNameVal = this.canvasDetails.get('itemName')?.value
    const supnoVal = this.suppDetails.get('supno')?.value
    const qtyVal = this.canvasDetails.get('qty')?.value
    const totalVal = this.canvasDetails.get('total')?.value
    const statusVal = this.canvasDetails.get('status')?.value
    const brandName = this.canvasDetails.get('brandName')?.value

    this.Posting.get('cvsno')?.setValue(cvsnoVal)
    this.Posting.get('factory')?.setValue(factoryVal)
    this.Posting.get('dateOrder')?.setValue(dateOrderoVal)
    this.Posting.get('company')?.setValue(companyVal)
    this.Posting.get('department')?.setValue(departmentVal)
    this.Posting.get('reqDescript')?.setValue(reqDescriptVal)
    this.Posting.get('reqBy')?.setValue(reqByVal)
    this.Posting.get('type')?.setValue(typeVal)
    this.Posting.get('ppe')?.setValue(ppeVal)
    this.Posting.get('remarks')?.setValue(remarksVal)
    this.Posting.get('ei')?.setValue(eiVal)
    this.Posting.get('supno')?.setValue(supnoVal)
    this.Posting.get('itemName')?.setValue(itemNameVal)
    this.Posting.get('qty')?.setValue(qtyVal)
    this.Posting.get('total')?.setValue(totalVal)
    this.Posting.get('status')?.setValue(statusVal)
    this.Posting.get('brandName')?.setValue(brandName)
    console.log(this.Posting);
 }


 onFormSubmit(){
  if (this.Posting.valid) {
    if (this.data) {
      console.log('Data:', this.data);
      this.canvasService.updateCanvas(this.data.id, this.Posting.value)
        .subscribe({
          next: (val: any) => {
            console.log('Updated data:', val);
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    } else {
      
      this.canvasService.addCanvas(this.Posting.value).subscribe({
        next: (val: any) => {
          console.log('Add successful:', val);
          this.dialogRef.close(true);
        },
        error: (err: any) => {
          console.error('Add error:', err);
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
    const aly = this.canvasDetails.get('dateOrder')?.value
    this.datepipe.transform(aly)
    console.log(aly);
    this.setValue();
    if (this.Posting.valid){
      console.log('Data:', this.data);
      console.log('valid');
    }
    else{
      console.log('not valid');
    }
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