import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { ItemswButtonsAddComponent } from '../itemsW-buttons/itemsw-buttons-add/itemsw-buttons-add.component';
import { ItemswButtonsDeleteComponent } from '../itemsW-buttons/itemsw-buttons-delete/itemsw-buttons-delete.component';
import { ItemswButtonsEditComponent } from '../itemsW-buttons/itemsw-buttons-edit/itemsw-buttons-edit.component';
import { ItemswButtonsPrintComponent } from '../itemsW-buttons/itemsw-buttons-print/itemsw-buttons-print.component';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemsWService } from '../../services/items-w-service-folder/items-w.service';





@Component({
  selector: 'app-items-w-maintenance',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './items-w-maintenance.component.html',
  styleUrl: './items-w-maintenance.component.css'
})

export class ItemsWMaintenanceComponent implements OnInit {

  displayedColumns: string[] = ['dnonumber', 'itemName','select' ];
  dataSource! : MatTableDataSource<any>;
  page = 1;
  pageSize = 10;
  item!: any[];
  itemsW!: FormGroup;
  IteName: any= [];

  constructor(public dialog: MatDialog,
    private ItemsWService: ItemsWService,
    private itemFB: FormBuilder,){

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



  }
  ngOnInit(): void {
    this.ItemList();
  }

  ItemList() {
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



  onRadioChange(event : MatRadioChange, item : any){
    console.log('Radio button changed:', event.value);
    this.item=item;
    this.itemsW.patchValue(item)
    
  }
  



  openPrintDialog(): void {
    const dialogRef = this.dialog.open(ItemswButtonsPrintComponent, {
      width: '1000px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  


  openAddDialog(): void {
    const dialogRef = this.dialog.open(ItemswButtonsAddComponent, {
      width: '650px',
      height: '500px',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDelDialog(): void {
    const dialogRef = this.dialog.open(ItemswButtonsDeleteComponent, {
      width: '600px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(ItemswButtonsEditComponent, {
      width: '650px',
      height: '500px',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
