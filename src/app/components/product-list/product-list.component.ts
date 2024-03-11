import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-details/product-details.component';
import { ProductService } from '../../services/product.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] | any;
  selectedProduct: Product | any;
  productId: number | undefined;
  productNotFound: string = '';

  @ViewChild('productIdForm')
  productIdForm!: NgForm;


  constructor(private productService: ProductService) {
    console.log('constructor');
  }

  // viewAllProducts = () => {
  //   this.productService.getAllProducts()
  //     .subscribe({
  //       next: (response) => {
  //         console.log(response.products);
  //         this.products = response.products;
  //       },
  //       error: (err) => { console.log(err); }
  //     });
  // };

  viewAllProducts = () => {
    this.productService.getAllProducts()
      .pipe(map((resp) => { return resp.products }))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.products = response;
        },
        error: (err) => { console.log(err); }
      });
  };

  viewProductById = (productIdForm: NgForm) => {
    if (productIdForm.value.productId)
      this.productService.getProductById(productIdForm.value.productId)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.selectProduct(response);
            productIdForm.reset();
          },
          error: (err) => {
            console.log(err);
            this.productNotFound = err.error.message;
            this.selectProduct(undefined);
            productIdForm.reset();
          }
        });
  };

  selectProduct(product: Product | any) {
    this.selectedProduct = product;
  }

  handleClick = () => {
    this.selectedProduct = undefined;
  };


}







// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { ProductDetailComponent } from '../product-details/product-details.component';

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [CommonModule, ProductDetailComponent],
//   templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })
// export class ProductListComponent {

//   products: any[] = [
//     { productId: 101, name: 'Laptop', price: 89990 },
//     { productId: 102, name: 'Phone', price: 49990 },
//     { productId: 103, name: 'Watch', price: 19990 },
//     { productId: 104, name: 'TV', price: 79990 },
//     { productId: 105, name: 'AC', price: 39990 },
//     { productId: 106, name: 'Fridge', price: 50990 },
//   ];

//   selectedProduct: any;

//   selectProduct(product: any) {
//     this.selectedProduct = product;
//   }

//   handleClick = () => {
//     this.selectedProduct = '';
//   };


// }





