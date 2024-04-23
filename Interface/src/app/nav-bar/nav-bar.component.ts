import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { UserService } from '../services/user-service-folder/user.service';


@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule, 
    RouterOutlet,
    RouterModule,
    MaterialModule
    
  ],
  templateUrl: './nav-bar.component.html',
  
  styleUrl: './nav-bar.component.css'
})


export class NavComponent {
  
  panelOpenState = false;
 constructor(private userService : UserService){

 }

  logout(){
    this.userService.logout();
  }
}

