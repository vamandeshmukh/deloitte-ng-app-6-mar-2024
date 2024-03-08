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


// import { CommonModule } from '@angular/common';
// import { Component, ViewChild } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

//   loginData: any = {
//     username: '',
//     password: ''
//   };

//  // @ViewChild('loginForm') loginForm!: NgForm;

//   submitLogin = (data: any) => {
//     if (data.value.username && data.value.password) {
//       this.loginData = data.value;
//       console.log(this.loginData);
//     }
//     else {
//       console.log('missing values');
//     }
//   };
// }
