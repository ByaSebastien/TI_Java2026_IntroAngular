import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './guards/is-authenticated-guard';
import { areYouSureGuard } from './guards/are-you-sure-guard';
import { yuGiResolver } from './resolvers/yu-gi-resolver';

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
    canActivate: [isAuthenticatedGuard],
  },
  {
    path: 'yugi',
    loadComponent: () =>
      import('./pages/yu-gi-index/yu-gi-index').then((m) => m.YuGiIndex),
    resolve: {
      yugiResult: yuGiResolver,
    }
  },
  {
    path: 'yugi/:id',
    loadComponent: () => import('./pages/yugi-details/yugi-details').then(m => m.YugiDetails),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    canDeactivate: [areYouSureGuard],
  },
];
