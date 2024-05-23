import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartServices } from '../../domains/shared/services/cart-services/cart-items.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../../domains/shared/services/products/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, HttpClientModule],
  providers: [ProductsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private cartItemsService: CartServices,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProductList().subscribe({
      next: (products) => (this.products = products),
      error: (error) => console.error('Error al obtener los datos: ', error),
      complete: () => console.log('Petición completada'),
    });
  }

  onAddToShoppingCart(product: Product) {
    this.cartItemsService.addProductToCart(product);
  }
}
