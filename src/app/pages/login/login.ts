import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _authService: AuthService = inject(AuthService);

  loginForm: FormGroup = this._fb.group({
    email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
    password: ['', { validators: [Validators.required], updateOn: 'blur' }],
  }, { validators: [] });

  constructor() {}

  submit() {
    console.log(this.loginForm);

    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    console.log('Form submited');
    this._authService.login(this.loginForm.value as any).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this._router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
