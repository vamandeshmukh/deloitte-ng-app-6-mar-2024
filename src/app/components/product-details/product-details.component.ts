
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  @Input() product: any;

  @Output()
  goBack = new EventEmitter<void>();

  onClick = () => {
    this.goBack.emit();
  };

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
