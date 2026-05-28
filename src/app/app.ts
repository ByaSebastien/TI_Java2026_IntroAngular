import { Component } from '@angular/core';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title: string = 'TI_Java2026_IntroAngular';

  constructor() {
    console.log('App loaded');
    console.log(this.title);
  }
}
