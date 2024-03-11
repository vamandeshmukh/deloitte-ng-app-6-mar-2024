import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [
    { productId: 101, name: 'Laptop', price: 89990 },
    { productId: 102, name: 'Phone', price: 49990 },
    { productId: 103, name: 'Watch', price: 19990 },
    { productId: 104, name: 'TV', price: 79990 },
    { productId: 105, name: 'AC', price: 39990 },
    { productId: 106, name: 'Fridge', price: 50990 },
  ];

  getAllProducts = () => {
    console.log('getAllProducts');
    return this.products;
  };


  constructor() { }
}
