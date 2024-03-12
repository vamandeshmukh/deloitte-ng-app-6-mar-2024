
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailComponent implements OnInit {

  product: Product | any;
  productId: number | any;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId)
      .subscribe((response) => {
        console.log(response);
        this.product = response;
      }
      );
  }
}



// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
// import { Product } from '../../models/product.model';

// @Component({
//   selector: 'app-product-details',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './product-details.component.html',
//   styleUrl: './product-details.component.css'
// })
// export class ProductDetailComponent implements OnInit, OnDestroy {

//   @Input() product: Product | any;

//   @Output()
//   goBack = new EventEmitter<void>();

//   onClick = () => {
//     this.goBack.emit();
//   };

//   constructor() {
//     console.log('constructor');
//   }

//   ngOnChanges() {
//     console.log('ngOnChanges');
//   }

//   ngOnInit(): void {
//     console.log('ngOnInit');
//   }

//   ngOnDestroy() {
//     console.log('ngOnDestroy');
//   }

// }
