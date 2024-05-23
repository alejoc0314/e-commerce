import { Injectable, WritableSignal, signal } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartServices {
  private _cartItems: WritableSignal<Product[]> = signal([]);
  private _productsQuantity: WritableSignal<number> = signal(0);
  private _cartMenuIsActive: WritableSignal<boolean> = signal(false);

  get CartItems() {
    return this._cartItems;
  }
  get productsQuantity() {
    return this._productsQuantity;
  }

  get cartMenuIsActive() {
    return this._cartMenuIsActive;
  }
  toggleCartMenu() {
    this.cartMenuIsActive.set(!this._cartMenuIsActive());
  }

  addProductToCart(product: Product) {
    const existingProduct = this.CartItems().find(
      (item) => item.id === product.id
    );
    if (!existingProduct) {
      this._cartItems.update((currentItems) => [...currentItems, product]);
    } else {
      this._cartItems.update((currentItems) =>
        currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
    this._productsQuantity.update((currentQuantity) => currentQuantity + 1);
  }

  removeProductFromCart(product: Product) {
    this._cartItems.update((currentItems) =>
      currentItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    this._productsQuantity.update((currentQuantity) => currentQuantity - 1);
  }
}
