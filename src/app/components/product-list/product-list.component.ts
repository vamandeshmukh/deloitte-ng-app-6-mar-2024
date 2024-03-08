import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'

})
export class ProductListComponent {

  products: any[] = [
    { productId: 101, name: 'Laptop', price: 89990 },
    { productId: 102, name: 'Phone', price: 49990 },
    { productId: 103, name: 'Watch', price: 19990 },
    { productId: 104, name: 'TV', price: 79990 },
    { productId: 105, name: 'AC', price: 39990 },
    { productId: 106, name: 'Fridge', price: 50990 },
  ];

  selectedProduct: any;

  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  handleClick = () => {
    this.selectedProduct = '';
  };


}



