import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user-service-folder/user.service';


@Component({
  selector: 'app-login-page-comp',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login-page-comp.component.html',
  styleUrl: './login-page-comp.component.css'
})
export class LoginPageCompComponent  implements OnInit{
  
loginform! : FormGroup
  hide = true;
  

/**
 *
 */
constructor(private loginFb : FormBuilder,
            private userService:UserService,
            private router :Router) {
 
  
}
ngOnInit() {
  this.initializeForm();

  
}


initializeForm() {
  this.loginform = this.loginFb.group({
    employeeNumber: ['', Validators.required],
    password: ['', Validators.required]
  });
}
 

login() {
  if (this.loginform.valid) {
    this.userService.login(this.loginform.value).subscribe(
      (res: any) => {
        console.log('Login successful', res.token);
        this.loginform.reset();
        this.userService.handleLoginSuccess(res.token);
        const tokenPayload = this.userService.decodeToken();
        this.userService.setRole(tokenPayload.role);
        console.log('Token stored:', localStorage.getItem('token'));
        this.router.navigate(['Dashboard']);

        
      },
      (err: any) => {
        console.log('Login error', err);
       

        // Check for specific HTTP status codes
        if (err.status === 401) {
          console.log('Account does not exist or invalid credentials.');
        } else {
          console.error('Unexpected error during login.', err);
        }

        // Rethrow the error to prevent navigation
        throw err;
      }
    );
  }
}

getuserinfo() {
  this.userService.getUserInfo().subscribe({
      next: (val: any) => {
          console.log('UserInfo', val);
      }
  });
}


}
