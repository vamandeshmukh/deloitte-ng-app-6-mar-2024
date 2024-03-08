import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  submitLogin = () => {
    if (this.loginData.username && this.loginData.password)
      console.log(this.loginData);
    else
      console.log('missing values');
  };

}
