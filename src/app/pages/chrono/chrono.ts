import { Component, OnDestroy, signal } from '@angular/core';
import { ToMinuteSecondPipe } from '../../pipes/to-minute-second-pipe';

@Component({
  selector: 'app-chrono',
  imports: [ToMinuteSecondPipe],
  templateUrl: './chrono.html',
  styleUrl: './chrono.scss',
})
export class Chrono implements OnDestroy {
  seconds = signal(0);

  timer: number | undefined = undefined;

  constructor() {
    // this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.timer = setInterval(() => {
      this.seconds.update((n) => n + 1);
    }, 10);

    console.log(this.timer);
  }

  stop() {
    if (!this.timer) {
      return;
    }

    clearInterval(this.timer);
    this.timer = undefined;
  }

  reset() {
    if (this.timer) {
      return;
    }

    this.seconds.set(0);
  }

  ngOnDestroy(): void {
    stop();
  }
}
