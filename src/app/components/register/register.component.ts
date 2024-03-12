// hands on 
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray, } from '@angular/forms';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { app } from '../../fb/firebaseConfig';
 
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  db = getFirestore(app);
 
  registerForm: FormGroup;
  addresses: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['',
        {
          validators: [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
          updateOn: 'blur'
        }],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      addresses: this.formBuilder.array([])
    },
      // { updateOn: 'submit' }
    );
    this.addresses = this.registerForm.get('addresses') as FormArray;
  }

  addAddress() {
    const addressFormGroup = this.formBuilder.group({
      city: ['', Validators.required],
      pin: ['', Validators.required]
    });
    this.addresses.push(addressFormGroup);
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    console.log('onSubmit');
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // setDoc(doc(this.db, "cities", "LA"), {
      //   name: "Los Angeles",
      //   state: "CA",
      //   country: "USA"
      // });
      console.log(getDoc(doc(this.db, "cities", "LA")));
      this.registerForm.reset();
    }
  }
}


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


