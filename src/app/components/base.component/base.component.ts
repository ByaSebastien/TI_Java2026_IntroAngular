import { Component, Directive, OnDestroy } from '@angular/core';

@Directive({})
export abstract class BaseComponent implements OnDestroy {


  ngOnDestroy(): void {
    console.log('BaseComponent ngOnDestroy called');
  }
}
