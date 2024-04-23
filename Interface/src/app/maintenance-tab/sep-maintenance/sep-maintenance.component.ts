import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { SepAddComponent } from '../sep-Buttons/sep-add/sep-add.component';
import { SepDeleteComponent } from '../sep-Buttons/sep-delete/sep-delete.component';
import { SepEditComponent } from '../sep-Buttons/sep-edit/sep-edit.component';

export interface PeriodicElement {
  num: number;
  dess: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {num: 1, dess: 'Hydrogen'},
  {num: 2, dess: 'Helium'},
  {num: 3, dess: 'Lithium'},
];


@Component({
  selector: 'app-sep-maintenance',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sep-maintenance.component.html',
  styleUrl: './sep-maintenance.component.css'
})
export class SepMaintenanceComponent {

  displayedColumns: string[] = ['num', 'dess', 'sel'];
  dataSource = ELEMENT_DATA;


  constructor(
    public dialog: MatDialog
  ) {}

  sepnew(): void {
    const dialogRef = this.dialog.open(SepAddComponent, {
      width: '300px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  sepedit(): void {
    const dialogRef = this.dialog.open(SepEditComponent, {
      width: '300px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {138158
      console.log('The dialog was closed');
    });
  }

  sepDelete(): void {
    const dialogRef = this.dialog.open(SepDeleteComponent, {
      width: '400px',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
