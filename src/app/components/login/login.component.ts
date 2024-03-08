import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData: any = {
    username: '',
    password: ''
  };

  @ViewChild('loginForm')
  loginForm!: NgForm;

  submitLogin = (loginForm: any) => {
    if (loginForm.value.username && loginForm.value.password) {
      this.loginData = loginForm.value;
      this.loginForm.resetForm();
      console.log(this.loginData);
    }
    else {
      console.log('missing values');
    }
  };

}



