import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-inventory-comp',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './inventory-comp.component.html',
  styleUrl: './inventory-comp.component.css'
})
export class InventoryCompComponent {

}
