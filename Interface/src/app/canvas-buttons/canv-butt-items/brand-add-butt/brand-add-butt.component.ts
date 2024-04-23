import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { BrandService } from '../../../services/brand-folder/brand.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-brand-add-butt',
  standalone: true,
  imports: [
    MaterialModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,

  ],
  templateUrl: './brand-add-butt.component.html',
  styleUrl: './brand-add-butt.component.css'
})
export class BrandAddButtComponent implements OnInit {
  saveItem!: any[];

  displayedColumns: string[] = ['brndNo', 'brndName','select']; 
  dataSource! : MatTableDataSource<any>;
  itemsW!:FormGroup
  brand!:FormGroup
  page = 1;
  pageSize = 10;
  IteName: any= [];
  brnd!: any[];
  ite:any = [];
  [x: string]: any;
  enable: any;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private BrandServ: BrandService,
    private BrandFB: FormBuilder) {



      this.brand = this.BrandFB.group({
        id:[''],
        brandNumber:[''],
        brandName:['']

      })

  }
  ngOnInit(): void {
    this.searchList()
  }

  
  loadNextPage(): void {
    this.page++;
    this.searchList();
  }
  loadNextPrevPage(): void {
    this.page--;
    this.searchList();
  }



  onRadioChange(event : MatRadioChange, item : any){
    console.log('Radio button changed:', item);
    this.ite=item;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.IteName = filterValue.trim().toLowerCase();

  }
  searchList(){
    this.BrandServ.getBySearch(this.IteName,this.page, this.pageSize).subscribe({ next: (val: any[]) => {
      this.dataSource = new MatTableDataSource(val);
        },
        error: (err: any) => {
          console.log(err);
        }});
    
  }

  saveSelected(){
    this.BrandServ.saveItem(this.ite);
    
  }
}
