import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./pages/product-index/product-index').then((m) => m.ProductIndex),
  },
  {
    path: 'chrono',
    loadComponent: () => import('./pages/chrono/chrono').then((m) => m.Chrono),
  },
  {
    path: 'yugi',
    loadComponent: () =>
      import('./pages/yu-gi-index/yu-gi-index').then((m) => m.YuGiIndex),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
];
