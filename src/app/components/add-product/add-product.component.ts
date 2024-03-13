import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray, } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  successMessage: string = '';

  productForm: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {

    this.productForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })
  };

  addProduct = (): Product | any => {
    this.productService.addProduct(this.productForm.value)
      .subscribe((resp) => {
        console.log(resp);
        this.successMessage = `${resp.title} added successfully!`;
        this.productForm.reset();
      });
    return null;
  };

}


