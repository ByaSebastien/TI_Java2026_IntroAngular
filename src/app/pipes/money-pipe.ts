import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {

  transform(value: number): string {

    let amount: number = value / 100;

    return `Prix : ${amount.toFixed(2)} €`;
  }
}
