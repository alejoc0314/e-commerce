import { Component, effect } from '@angular/core';
import { CartServices } from '../../domains/shared/services/cart-services/cart-items.service';
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
    imports: [NavComponent]
})
export class CartComponent {
  public products = this.cartServices.CartItems;
  public cartMenuIsActive = this.cartServices.cartMenuIsActive;

  constructor(private cartServices: CartServices) {}

  toggleCart() {
    this.cartServices.toggleCartMenu(); 
  }

  observeCartMenuIsActive() {
    effect(() => {
      if (this.cartMenuIsActive()) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    });
  }
}
