import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from '../img/img.component';
import { Product } from '../../models/product.model';
import { CartServices } from '../../domains/shared/services/cart-services/cart-items.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ImgComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addedProduct = new EventEmitter<Product>();

  constructor(private cartItemsService: CartServices, private toastr: ToastrService) {}

  onAddToCart() {
    this.cartItemsService.addProductToCart(this.product);
    this.toastr.success('Producto añadido al carrito!', '', {
      timeOut: 10000,
      positionClass: 'toast-top-right',
    });
  }
}

