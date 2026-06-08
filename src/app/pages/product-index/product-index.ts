import {
  Component,
  computed,
  effect,
  inject,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { GsapHover } from '../../directives/gsap-hover';
import { GsapEntrance } from '../../directives/gsap-entrance';
import { MoneyPipe } from '../../pipes/money-pipe';
import { UpperCasePipe } from '@angular/common';
import { CartLine } from '../../models/cart-line';
import { DeleteConfirmation } from '../../components/delete-confirmation/delete-confirmation';
import { Cart } from '../../components/cart/cart';
import { CartService } from '../../services/cart-service';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { cartStore } from '../../stores/cart-store';

@Component({
  selector: 'app-product-index',
  imports: [
    FormsModule,
    GsapHover,
    GsapEntrance,
    MoneyPipe,
    UpperCasePipe,
    DeleteConfirmation,
    Cart,
  ],
  templateUrl: './product-index.html',
  styleUrl: './product-index.scss',
})
export class ProductIndex {

  cartStore = inject(cartStore);
  productService: ProductService = inject(ProductService);
  authService: AuthService = inject(AuthService);

  connectedUser = this.authService.connectedUser;

  productsRessource = this.productService.getProduct();

  searchInput: string = '';

  selectedProduct: WritableSignal<Product | undefined> = signal(undefined);

  constructor(
    // private readonly cartService: CartService,
  ) {}

  toggleLike(product: Product): void {
    product.liked = !product.liked;
  }

  addToCart(p: Product): void {
    this.cartStore.addLine({productName: p.name, quantity: 1, productPrice: p.price});
  }

  removeFromCart(productName: string): void {
    // this.cartStore.removeLine({productName: productName});
  }

  addQuantity(productName: string): void {
    // this.cartService.appendCart(productName);
  }

  removeQuantity(productName: string): void {
    // this.cartService.withdrawCart(productName);
  }

  setSelectedProduct(product: Product): void {
    this.selectedProduct.set(product);
  }

  cancelDeleting() {
    console.log('Canceled deleting ' + this.selectedProduct()?.name);
    this.selectedProduct.set(undefined);
  }

  confirmDeleting() {
    this.productService.deleteProduct(this.selectedProduct()?.id!).subscribe(() => {
      console.log('Deleted ' + this.selectedProduct()?.name);
      this.selectedProduct.set(undefined);
      this.productsRessource.reload();
    });
  }
}
