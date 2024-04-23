import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-history-comp',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './history-comp.component.html',
  styleUrl: './history-comp.component.css'
})
export class HistoryCompComponent {

}
