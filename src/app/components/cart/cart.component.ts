import { Component } from '@angular/core';
import { CartItemsService } from '../../domains/shared/services/cart-items/cart-items.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  public products = this.cartItemsService.CartItems;

  constructor(private cartItemsService: CartItemsService) {
    console.log('Products: ', this.products);
  }
}
