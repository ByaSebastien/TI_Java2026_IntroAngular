import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit, Signal,
} from '@angular/core';
import { BaseComponent } from '../../components/base.component/base.component';
import { AuthService } from '../../services/auth.service';
import { UserTokenDto } from '../../models/user-token-dto';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home
  extends BaseComponent
  implements OnInit, AfterViewInit, AfterContentInit
{

  private readonly authService: AuthService = inject(AuthService);

  connectedUser: Signal<UserTokenDto | undefined> = this.authService.connectedUser;

  constructor() {
    super();
    console.log('In constructor');
    inject(DestroyRef).onDestroy(() => {
      console.log('DestroyRef onDestroy called');
    });
  }

  ngAfterContentInit(): void {
    console.log('in ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('in ngAfterViewInit');
  }

  ngOnInit(): void {
    console.log('In ngOnInit');
  }
}
