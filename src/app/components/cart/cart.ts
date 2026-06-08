import {
  Component,
  computed, inject,
  input,
  output, Signal,
} from '@angular/core';
import { CartLine } from '../../models/cart-line';
import { MoneyPipe } from '../../pipes/money-pipe';
import { CartService } from '../../services/cart-service';
import { cartStore } from '../../stores/cart-store';

@Component({
  selector: 'app-cart',
  imports: [MoneyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  cartStore = inject(cartStore)

  cart: Signal<CartLine[]> = this.cartStore.lines;
  totalPrice = this.cartStore.totalPrice;

  minus = output<string>();
  plus = output<string>();
  delete = output<string>();

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
