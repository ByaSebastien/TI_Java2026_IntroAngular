import {
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { GsapHover } from '../../directives/gsap-hover';
import { GsapEntrance } from '../../directives/gsap-entrance';
import { MoneyPipe } from '../../pipes/money-pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-index',
  imports: [FormsModule, GsapHover, GsapEntrance, MoneyPipe, UpperCasePipe],
  templateUrl: './product-index.html',
  styleUrl: './product-index.scss',
})
export class ProductIndex {
  products: WritableSignal<Product[]> = signal([
    {
      id: 1,
      name: 'Switch 2',
      price: 45900,
      image:
        'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_152255307?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402',
      liked: false,
    },
    {
      id: 2,
      name: 'PS5',
      price: 48900,
      image:
        'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_161824057?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402',
      liked: false,
    },
    {
      id: 3,
      name: 'Xbox Series S',
      price: 47243,
      image:
        'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_145956804?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402',
      liked: false,
    },
  ]);

  searchInput: string = '';

  constructor() {}

  toggleLike(product: Product): void {
    product.liked = !product.liked;
  }

  search() {
    this.products.set(
      this.products().filter((product) =>
        product.name.toLowerCase().includes(this.searchInput.toLowerCase()),
      ),
    );
  }
}
