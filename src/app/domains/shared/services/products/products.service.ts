import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../../../../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map((productList: Product[]) => {
        return productList.map((product) => ({
          ...product,
          quantity: 1, 
        }));
      })
    );
  }
}
