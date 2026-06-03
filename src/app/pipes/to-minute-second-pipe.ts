import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinuteSecond',
})
export class ToMinuteSecondPipe implements PipeTransform {
  transform(seconds: number): string {

    let minute = Math.floor(seconds / 60);
    seconds = seconds % 60;

    return `${minute.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  }
}
