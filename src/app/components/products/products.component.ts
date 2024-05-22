import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartItemsService } from '../../domains/shared/services/cart-items/cart-items.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private cartItemsService: CartItemsService
  ) {}

  public products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((response) => {
        this.products = response.map((product, i) => ({
          ...product,
          id: i,
          image: this.extractFirstImage(product.images),
          quantity: 1
        }));
        console.log(this.products);
      });
  }

  extractFirstImage(rawImages: string[]): string {
    // Supongamos que rawImages siempre tiene un solo string que necesita ser limpiado
    if (rawImages.length === 1) {
      // Eliminar los caracteres no deseados: [" y "]
      const cleanedString = rawImages[0].replace(/^\["|"\]$/g, '');
      return cleanedString;
    }
    // Si el array contiene múltiples URLs (lo cual no debería pasar según el ejemplo), devolver el primer elemento limpiado
    return rawImages[0].replace(/^\["|"\]$/g, '');
  }

  onAddToShoppingCart(product: Product) {
    this.cartItemsService.addProductToCart(product);
  }
}
