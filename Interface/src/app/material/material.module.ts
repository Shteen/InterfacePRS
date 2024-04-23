import {
    MatDialog,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogModule
  } from '@angular/material/dialog';
  import {MatButtonModule} from '@angular/material/button';
  import {FormsModule, ReactiveFormsModule} from '@angular/forms';
  import {MatInputModule} from '@angular/material/input';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatTabsModule} from '@angular/material/tabs';
  import {MatExpansionModule} from '@angular/material/expansion';
  import {MatIconModule} from '@angular/material/icon';
  import { MatSelectModule } from '@angular/material/select';
  import { NgModule, Type } from '@angular/core';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import {MatNativeDateModule} from '@angular/material/core';
  import { MatCheckboxModule } from '@angular/material/checkbox';
  import {MatCardModule} from '@angular/material/card';
  import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

 
  const material = [
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogModule,
    MatDialogContent,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    RouterOutlet,
    RouterModule,
    MatMenuModule,
    MatRadioModule,
    MatExpansionModule
   
   
  ]
 
 
  @NgModule({
    imports: [material],
    exports: [material],
 
    providers: [  
      MatDatepickerModule,
      MatNativeDateModule  
    ],
  })
 
  export class MaterialModule{
    static MatButtonModule: readonly any[] | Type<any>;
}