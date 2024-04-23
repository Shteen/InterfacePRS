import { Component, Inject, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { SepAddAddComponent } from '../../sep-Buttons/sep-add-but/sep-add-add/sep-add-add.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrandService } from '../../../services/brand-folder/brand.service';
import { Router } from 'express';
import { RouterEvent, RouterLink } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-brand-add',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './brand-add.component.html',
  styleUrl: './brand-add.component.css'
})
export class BrandAddComponent implements OnInit{
  brand:FormGroup
  constructor(public dialog: MatDialog,
    private BrandServ: BrandService,
    private BrandFB: FormBuilder,
  @Inject(MAT_DIALOG_DATA)public data:any) {

      this.brand = this.BrandFB.group({
        id:[''],
        brandNumber:[''],
        brandName:['']

      })

  }
  ngOnInit(): void {
    console.log("data", this.data)
    this.brand.patchValue(this.data)
    }
  

   onFormSubmit(){
    if (this.brand.valid) {
      if (this.data) {
        console.log('Data:', this.data);
        this.BrandServ.updateBrand(this.data.id, this.brand.value)
          .subscribe({
            next: (val: any) => {
              console.log('Updated data:', val);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
          
      } else {
        
        this.BrandServ.addBrand(this.brand.value).subscribe({
          next: (val: any) => {
            console.log('Add successful:', val);
            window.location.reload();
          },
          error: (err: any) => {
            console.error('Add error:', err);
          },
        });
      }
    }
    window.location.reload();
  }




}
