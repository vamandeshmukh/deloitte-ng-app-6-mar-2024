
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray, } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AngularFireModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  userService = inject(UserService);
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
    );
  }
  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.userService.addUser(this.registerForm.value)
        .subscribe((response) => {
          console.log(response);
          alert('Registered successfully!');
          this.registerForm.reset();
        });
    }
  }
}

// import { CommonModule } from '@angular/common';
// import { Component, inject } from '@angular/core';
// import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray, } from '@angular/forms';
// import { AngularFireModule } from '@angular/fire/compat';
// import { UserService } from '../../services/user.service';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule, AngularFireModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

//   userService = inject(UserService);

//   registerForm: FormGroup;
//   addresses: FormArray;

//   constructor(private formBuilder: FormBuilder) {

//     this.registerForm = this.formBuilder.group({
//       username: ['',
//         {
//           validators: [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
//           updateOn: 'blur'
//         }],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]],
//       addresses: this.formBuilder.array([])
//     },
//       // { updateOn: 'submit' }
//     );
//     this.addresses = this.registerForm.get('addresses') as FormArray;
//   }

//   addAddress() {
//     const addressFormGroup = this.formBuilder.group({
//       city: ['', Validators.required],
//       pin: ['', Validators.required]
//     });
//     this.addresses.push(addressFormGroup);
//   }

//   removeAddress(index: number) {
//     this.addresses.removeAt(index);
//   }

//   onSubmit() {
//     console.log(this.registerForm.value);
//     if (this.registerForm.valid) {
//       this.userService.addUser(this.registerForm.value)
//         .subscribe((response) => {
//           console.log(response);
//           alert(response);
//           this.registerForm.reset();
//         });
//     }
//   }
// }


// // hands on
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray, } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

//   registerForm: FormGroup;
//   addresses: FormArray;

//   constructor(private formBuilder: FormBuilder) {
//     this.registerForm = this.formBuilder.group({
//       username: ['',
//         {
//           validators: [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
//           updateOn: 'blur'
//         }],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]],
//       addresses: this.formBuilder.array([])
//     },
//       // { updateOn: 'submit' }
//     );
//     this.addresses = this.registerForm.get('addresses') as FormArray;
//   }

//   addAddress() {
//     const addressFormGroup = this.formBuilder.group({
//       city: ['', Validators.required],
//       pin: ['', Validators.required]
//     });
//     this.addresses.push(addressFormGroup);
//   }

//   removeAddress(index: number) {
//     this.addresses.removeAt(index);
//   }

//   onSubmit() {
//     console.log('onSubmit');
//     console.log(this.registerForm.value);
//     if (this.registerForm.valid) {
//       console.log(this.registerForm.value);
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



