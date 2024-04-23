import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { SepAddAddComponent } from '../../sep-Buttons/sep-add-but/sep-add-add/sep-add-add.component';

@Component({
  selector: 'app-brand-edit',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './brand-edit.component.html',
  styleUrl: './brand-edit.component.css'
})
export class BrandEditComponent {

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
