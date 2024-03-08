import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailComponent {

  @Input() product: any;

  @Output()
  goBack = new EventEmitter<void>();

  onClick = () => {
    this.goBack.emit();
  };



}
