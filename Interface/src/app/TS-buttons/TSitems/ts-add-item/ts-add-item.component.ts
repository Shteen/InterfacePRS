import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatRadioButton } from '@angular/material/radio';


export interface PeriodicElement {
  code: string;
  name: string;
  dess: string;
  sel: MatRadioModule;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {code: '654564', name: 'Hydrogen', dess: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', sel: ''},
  {code: '654564', name: 'Helium', dess: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', sel: ''},
  {code: '654564', name: 'Lithium', dess: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', sel: ''},
  {code: '654564', name: 'Beryllium', dess: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', sel: ''},
  {code: '654564', name: 'Boron', dess: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', sel: ''},
];

@Component({
  selector: 'app-ts-add-item',
  standalone: true,
  imports: [MaterialModule, MatRadioModule] ,
  templateUrl: './ts-add-item.component.html',
  styleUrl: './ts-add-item.component.css'
})
export class TsAddItemComponent {

  displayedColumns: string[] = ['code', 'name', 'dess', 'sel'];
  dataSource = ELEMENT_DATA;


  constructor(
    public dialogRef: MatDialogRef<TsAddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
