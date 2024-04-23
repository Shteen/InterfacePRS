import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CanvasEditComponent } from '../canvas-edit/canvas-edit.component';
import {MatPaginatorIntl, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {Subject} from 'rxjs';
import { SupplierServiceService } from '../../services/supplier-service-folder/supplier-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-supp-list-component',
  standalone: true,
  imports: [MaterialModule,MatPaginatorModule,
    MatPaginatorModule,
    ],
  templateUrl: './supp-list-component.component.html',
  styleUrl: './supp-list-component.component.css'
})
export class SuppListComponentComponent implements OnInit{
  SupplierDetails!:FormGroup
  displayedColumns: string[] = ['supplierName', 'supno', 'keyperson', 'number1' ,'terms', 'select'];
  dataSource! : MatTableDataSource<any>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.supname = filterValue.trim().toLowerCase();

  }
  itemSupp:any= [];
  supname = ""
  
  searchList(){
    this.SupplierServiceService.getBySearch(this.supname).subscribe({ next: (val: any[]) => {
      this.dataSource = new MatTableDataSource(val);
        },
        error: (err: any) => {
          console.log(err);
        }});
    
  }

  

  onRadioChange(event : MatRadioChange, item : any){
    console.log('Radio button changed:', item);
    this.itemSupp=item;
  }

  saveSelected(){
    this.SupplierServiceService.saveItem(this.itemSupp);
    
  }

  page = 1;
  pageSize = 10;


  constructor(public dialog: MatDialog, 
    public dialogRef: MatDialogRef<CanvasEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private SupplierServiceService : SupplierServiceService,
    private suppFB : FormBuilder) {

      this.SupplierDetails = this.suppFB.group({
        suppIName: [''],
        suppNum: 0,
        tellNo: 0,
        contactP: [''],
        paymenTerms: 0
      })

    }


    
  ngOnInit(): void {
    this.getSupplierList();
  }


  getSupplierList() {
    this.SupplierServiceService.getAll(this.page, this.pageSize).subscribe({
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
    this.getSupplierList();
  }
  loadNextPrevPage(): void {
    this.page--;
    this.getSupplierList();
  }
}
