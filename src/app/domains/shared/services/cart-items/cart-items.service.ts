import { Injectable, signal } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  private _cartItems = signal<Product[]>([]);
  private _productsQuantity = signal<number>(0);

  get CartItems() {
    return this._cartItems;
  }

  get ProductsQuantity() {
    return this._productsQuantity;
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
