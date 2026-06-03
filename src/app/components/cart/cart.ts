import {
  Component,
  computed, inject,
  input,
  output, Signal,
} from '@angular/core';
import { CartLine } from '../../models/cart-line';
import { MoneyPipe } from '../../pipes/money-pipe';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  imports: [MoneyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  cartService: CartService = inject(CartService);

  cart: Signal<CartLine[]> = this.cartService.cart;

  minus = output<string>();
  plus = output<string>();
  delete = output<string>();

  totalPrice = computed(() => {
    return this.cart()
      .map((l) => l.productPrice * l.quantity)
      .reduce((a, b) => a + b, 0);
  });

  emit(action: 'minus' | 'plus' | 'delete', productName: string) {
    switch (action) {
      case 'minus':
        this.minus.emit(productName);
        break;
      case 'plus':
        this.plus.emit(productName);
        break;
      case 'delete':
        this.delete.emit(productName);
        break;
    }
  }
}
