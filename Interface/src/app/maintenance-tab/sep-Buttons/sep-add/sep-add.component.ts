import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { SepAddAddComponent } from '../sep-add-but/sep-add-add/sep-add-add.component';
import { SepAddCanComponent } from '../sep-add-but/sep-add-can/sep-add-can.component';

@Component({
  selector: 'app-sep-add',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sep-add.component.html',
  styleUrl: './sep-add.component.css'
})
export class SepAddComponent {

  constructor(
    public dialog: MatDialog
  ) {}

  
  save(): void {
    const dialogRef = this.dialog.open(SepAddAddComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vw'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
