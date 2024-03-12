import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url: string = 'https://dummyjson.com/products';
  gitRepoUrl: string = 'https://api.github.com/search/repositories';

  getAllProducts = (): Observable<any> => {
    console.log('getAllProducts');
    return this.http.get<any>(this.url)
  };

  getProductById = (id: number): Observable<Product> => {
    console.log(id);
    return this.http.get<Product>(`${this.url}/${id}`);
  };

  addProduct(product: Product) {
    console.log(product);
    return this.http.post<Product>(`${this.url}/add`, product);
  }



  // more methods 

  getGitRepos = (query: string): Observable<any> => {
    console.log(query);
    return this.http.get(`${this.gitRepoUrl}?q=${query}`);
  };


}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   products: any[] = [
//     { productId: 101, name: 'Laptop', price: 89990 },
//     { productId: 102, name: 'Phone', price: 49990 },
//     { productId: 103, name: 'Watch', price: 19990 },
//     { productId: 104, name: 'TV', price: 79990 },
//     { productId: 105, name: 'AC', price: 39990 },
//     { productId: 106, name: 'Fridge', price: 50990 },
//   ];

//   getAllProducts = () => {
//     console.log('getAllProducts');
//     return this.products;
//   };

//   // more methods


//   constructor() { }
// }
