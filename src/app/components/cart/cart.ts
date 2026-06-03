import {
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { CartLine } from '../../models/cart-line';
import { MoneyPipe } from '../../pipes/money-pipe';

@Component({
  selector: 'app-cart',
  imports: [MoneyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cart = input.required<CartLine[]>();

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
