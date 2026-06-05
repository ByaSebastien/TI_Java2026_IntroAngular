import { inject, Injectable } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private readonly _http: HttpClient = inject(HttpClient);

  getProduct() {
    return httpResource<Product[]>(() => 'http://localhost:3000/products/');
  }

  deleteProduct(id: number) {
    return this._http.delete<void>(`http://localhost:3000/660/products/${id}`);
  }
}
