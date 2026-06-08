import { inject, Injectable, Signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Card, YugiResult } from '../models/yu-gi-result';

@Injectable({
  providedIn: 'root',
})
export class YuGiService {

  // https://db.ygoprodeck.com/api/v7/cardinfo.php?language=fr&num=10&offset=0
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  private readonly _http: HttpClient = inject(HttpClient);

  getCards(pageNumber: number) {

    let limit = 10;
    let offset = pageNumber * limit;

    return this._http.get<YugiResult>(`${this.apiUrl}?language=fr&num=${limit}&offset=${offset}`);
  }

  getCard(id: Signal<number | undefined>) {
    return httpResource<YugiResult>(() => `${this.apiUrl}?language=fr&id=${id()}`);
  }
}
