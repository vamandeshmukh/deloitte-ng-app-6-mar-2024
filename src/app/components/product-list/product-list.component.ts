import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-details/product-details.component';
import { ProductService } from '../../services/product.service';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] | any;
  selectedProduct: Product | any;
  productId: number | undefined;
  productNotFound: string = '';

  @ViewChild('productIdForm')
  productIdForm!: NgForm;

  searchControl = new FormControl();
  searchedRepos: any;


  constructor(private productService: ProductService) {
  }


  ngOnInit(): void {

    this.searchControl.valueChanges
      .pipe(
        map((q) => {
          if (q === '')
            return 'vaman';
          return q;
        }),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((qry: string) => { return this.productService.getGitRepos(qry) })
      )
      // handle null
      // .pipe()
      .subscribe((resp) => {
        console.log(resp);
        this.searchedRepos = resp;
      })
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

  viewAllProducts = (): void => {
    this.productService.getAllProducts()
      .pipe(map((resp) => { return resp.products }))
      .subscribe({
        next: (response: Product[]) => {
          console.log(response);
          this.products = response;
        },
        error: (err) => { console.log(err); }
      });
  };

  viewProductById = (productIdForm: NgForm): void => {
    if (productIdForm.value.productId)
      this.productService.getProductById(productIdForm.value.productId)
        .pipe(debounceTime(1000))
        .subscribe({
          next: (response: Product) => {
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

  selectProduct(product: Product | any): void {
    this.selectedProduct = product;
  }

  handleClick = (): void => {
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





