import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-rr-balance-add-add',
  standalone: true,
  imports: [MaterialModule,MatRadioModule],
  templateUrl: './rr-balance-add-add.component.html',
  styleUrl: './rr-balance-add-add.component.css'
})
export class RrBalanceAddAddComponent {

}
