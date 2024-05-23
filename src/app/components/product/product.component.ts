import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from '../img/img.component';
import { Product } from '../../models/product.model';
import { CartServices } from '../../domains/shared/services/cart-services/cart-items.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ImgComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addedProduct = new EventEmitter<Product>();

  constructor(private cartItemsService: CartServices) {}

  onAddToCart() {
    this.cartItemsService.addProductToCart(this.product);
  }
}
