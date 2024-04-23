import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrandAddComponent } from '../brand-buttons/brand-add/brand-add.component';
import { BrandDeleteComponent } from '../brand-buttons/brand-delete/brand-delete.component';
import { BrandEditComponent } from '../brand-buttons/brand-edit/brand-edit.component';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrandService } from '../../services/brand-folder/brand.service';




@Component({
  selector: 'app-brand-maintenance',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './brand-maintenance.component.html',
  styleUrl: './brand-maintenance.component.css'
})

export class BrandMaintenanceComponent  implements OnInit{
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
  constructor(public dialog: MatDialog,
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
    
    this.brand.patchValue(item)
    this.ite=item;
    console.log(this.brand);
   
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


  addBrand(): void {
    const dialogRef = this.dialog.open(BrandAddComponent, {
      width: '300px',
      height: 'auto',
      maxHeight: '90vw'
    });
  }

  dellButton(){
    
    const idDel = this.brand.get('id')?.value
    console.log(idDel);
    this.BrandServ.getAllBrand().subscribe({
      
      next: (val: any[]) => {
        val.forEach(item => {
          if(item.id = idDel ){
            console.log(item.id);

            this.BrandServ.deleteBrand(idDel)
            .subscribe({
              next: (val: any) => {
                console.log('Updated data:', val);
                window.location.reload();
              },
              error: (err: any) => {
                console.error(err);
              },
            });
          }                    
          else{
            console.log('yawa');
          }                                                                    
        })
      },
      error: (err: any) => {
        console.log(err);
      }
    })
    
  }


}
