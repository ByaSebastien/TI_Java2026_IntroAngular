import {
  Component,
  inject,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { YuGiService } from '../../services/yu-gi-service';
import { YugiResult } from '../../models/yu-gi-result';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-yu-gi-index',
  imports: [RouterLink],
  templateUrl: './yu-gi-index.html',
  styleUrl: './yu-gi-index.scss',
})
export class YuGiIndex {
  private readonly _yuGiService: YuGiService = inject(YuGiService);

  yugiResult: InputSignal<YugiResult> = input.required<YugiResult>();
  // yugiResult$: Observable<YugiResult>;

  currentPage: number = 0;

  constructor() {
    // this.getCards(this.currentPage);
    // this.yugiResult$ = this._yuGiService.getCards(0);
    // this.yugiResult = toSignal(this._yuGiService.getCards(this.currentPage));
  }

  previous() {
    if (this.currentPage == 0) {
      return;
    }
    // this.getCards(--this.currentPage);
  }

  next() {
    if (!this.yugiResult) return;
    if (this.currentPage == this.yugiResult()?.meta.total_pages) return;
    // this.getCards(++this.currentPage);
    console.log('Current page:', this.currentPage);
  }

  // getCards(page: number) {
  //   this._yuGiService.getCards(page).subscribe({
  //     next: (result) => {
  //       this.yugiResult.set(result);
  //     },
  //     error: (err) => {
  //       console.log('Error fetching Yu-Gi cards:', err);
  //     },
  //     complete: () => {
  //       console.log('Finished fetching Yu-Gi cards');
  //     },
  //   });
  // }
}
