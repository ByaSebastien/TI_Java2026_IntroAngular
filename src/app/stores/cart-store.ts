import {
  getState,
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { CartLine } from '../models/cart-line';
import { computed, effect } from '@angular/core';

interface CartState {
  lines: CartLine[];
}

const initialState: CartState = {
  lines: [],
};

export const cartStore = signalStore(
  withState(initialState),
  withComputed(({ lines }) => ({
    linesCount: computed(() => lines().length),
    totalPrice: computed(() =>
      lines().reduce(
        (total, line) => total + line.productPrice * line.quantity,
        0,
      ),
    ),
  })),
  withMethods((store) => ({
    loadSession: () => {
      const existing = JSON.parse(localStorage.getItem('cart') || '{"lines": []}');
      patchState(store, state => ({...state, lines: existing.lines}));
    },
    addLine: (line: CartLine) => {
      patchState(store, state => ({...state, lines: [...state.lines, line]}));
    },
    removeLine: (index: number) => {
      patchState( store, state => {
        state.lines.splice(index, 1);
        return {...state, lines: [...state.lines]};
      });
    },
  })),
  withHooks({
    onInit(store) {
      store.loadSession();
      effect(() => {
        const state = getState(store);
        localStorage.setItem('cart', JSON.stringify(state));
      });
    },
    onDestroy(store) {
      console.log("C'est la fin des haricots");
    },
  }),
);
