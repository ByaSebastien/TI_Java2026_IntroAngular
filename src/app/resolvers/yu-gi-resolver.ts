import { ResolveFn } from '@angular/router';
import { YuGiService } from '../services/yu-gi-service';
import { inject } from '@angular/core';
import { YugiResult } from '../models/yu-gi-result';

export const yuGiResolver: ResolveFn<YugiResult> = (route, state) => {
  const yuGiService: YuGiService = inject(YuGiService);

  console.log('Je suis dans le resolver');

  return yuGiService.getCards(0);
};
