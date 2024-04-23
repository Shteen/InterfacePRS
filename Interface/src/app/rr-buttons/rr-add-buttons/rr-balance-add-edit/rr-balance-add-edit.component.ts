import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-rr-balance-add-edit',
  standalone: true,
  imports: [MaterialModule,MatRadioModule],
  templateUrl: './rr-balance-add-edit.component.html',
  styleUrl: './rr-balance-add-edit.component.css'
})
export class RrBalanceAddEditComponent {

}
