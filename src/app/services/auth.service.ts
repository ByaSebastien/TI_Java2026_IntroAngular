import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserTokenDto } from '../models/user-token-dto';
import { tap } from 'rxjs';
import { LoginForm } from '../models/login-form';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly _http: HttpClient = inject(HttpClient);

  connectedUser: WritableSignal<UserTokenDto | undefined>;

  constructor() {
    let user = localStorage.getItem('connectedUser');
    this.connectedUser = signal(user ? JSON.parse(user) : undefined);
  }

  login(form: LoginForm) {
    return this._http
      .post<UserTokenDto>('http://localhost:3000/login', form)
      .pipe(
        tap((res) => {
          this.connectedUser.set(res);
          localStorage.setItem('connectedUser', JSON.stringify(res));
        }),
      );
  }

  logout() {
    this.connectedUser.set(undefined);
    localStorage.removeItem('connectedUser');
  }
}
