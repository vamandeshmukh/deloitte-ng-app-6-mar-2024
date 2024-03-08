// hands on 
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      username: ['',
        {
          validators: [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
          updateOn: 'blur'
        }],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    },
      { updateOn: 'submit' }
    );
  }

  onSubmit() {
    console.log('onSubmit');
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.registerForm.reset();
    }
  }
}



// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

//   registerForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {

//     this.registerForm = this.formBuilder.group({
//       username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
//       password: ['', [Validators.required]]
//     });
//   }

//   onSubmit() {
//     if (this.registerForm.valid) {
//       console.log(this.registerForm.value.username);
//       this.registerForm.reset();
//     }
//   }
// }


// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

//   registerForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {

//     this.registerForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.registerForm.valid) {
//       console.log(this.registerForm.value.username);
//       this.registerForm.reset();
//     }
//   }
// }

