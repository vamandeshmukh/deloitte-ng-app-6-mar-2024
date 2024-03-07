import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {


}
