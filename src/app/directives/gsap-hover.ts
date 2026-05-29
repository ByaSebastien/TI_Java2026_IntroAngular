import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appGsapHover]',
})
export class GsapHover {

  el: ElementRef = inject(ElementRef);

  constructor() {
    gsap.set(this.el.nativeElement, { scale: 1});
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    gsap.to(this.el.nativeElement, { scale: 1.1, duration: 1});
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    gsap.to(this.el.nativeElement, { scale: 1});
  }
}
