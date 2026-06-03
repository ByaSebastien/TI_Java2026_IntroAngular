import { Injectable, signal, WritableSignal } from '@angular/core';
import { CartLine } from '../models/cart-line';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cart: WritableSignal<CartLine[]> = signal([]);

  addToCart(p: Product) {
    this.cart.update((cart) => {
      let existing = cart.find((line) => line.productName === p.name);
      if (existing) {
        existing.quantity = existing.quantity + 1;
        return [...cart];
      }
      return [
        ...cart,
        { productName: p.name, quantity: 1, productPrice: p.price },
      ];
    });
  }

  removeFromCart(productName: string) {
    this.cart.update((cart) =>
      cart.filter((line) => line.productName !== productName),
    );
  }

  withdrawCart(productName: string) {
    this.cart.update((cart) => {
      let existing = cart.find((line) => line.productName === productName);
      if (existing) {
        existing.quantity = existing.quantity - 1;

        if (existing.quantity <= 0) {
          return [...cart.filter((line) => line.productName !== productName)];
        }
      }
      return [...cart];
    });
  }

  appendCart(productName: string) {
    this.cart.update((cart) => {
      let existing = cart.find((line) => line.productName === productName);
      if (existing) {
        existing.quantity = existing.quantity + 1;
      }
      return [...cart];
    });
  }

}
