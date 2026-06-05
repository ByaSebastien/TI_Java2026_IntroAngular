import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {

  private readonly _authService: AuthService = inject(AuthService);

  connectedUser = this._authService.connectedUser;

  logout(): void {
    this._authService.logout();
  }

}
