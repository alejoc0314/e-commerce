import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { CartServices } from '../../domains/shared/services/cart-services/cart-items.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  public showMenu: boolean = false;
  public productQuantity = this.cartServices.productsQuantity;
  public cartMenuIsActive = this.cartServices.cartMenuIsActive;

  constructor(private cartServices: CartServices) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleCart() {
    this.cartServices.toggleCartMenu(); 
  }
}
