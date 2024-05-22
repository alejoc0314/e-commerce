import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { CartItemsService } from '../../domains/shared/services/cart-items/cart-items.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  public showMenu: boolean = false;
  public showCartMenu: boolean = false;
  public productQuantity = this.cartItemsService.ProductsQuantity;

  constructor(private cartItemsService: CartItemsService) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleCart() {
    this.showCartMenu = !this.showCartMenu;
  }
}
