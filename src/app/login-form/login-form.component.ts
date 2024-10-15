import { Component, Injectable } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})

@Injectable({ providedIn: 'root' })
export class LoginFormComponent {
  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.http.post('http://localhost:9006/api/auth/authenticate', { email, password })
        .subscribe({
          next: (response: any) => {
            // Salva il token nel servizio
            this.authService.setToken(response.token);
            this.showSuccess(); // Mostra il messaggio di successo
            this.router.navigate(['/']);

          },
          error: (error) => {
            console.error('Login failed:', error);
            this.showError();

          }
        });
    }
  }

  showSuccess() {
    this.snackBar.open('Login riuscito!', 'Chiudi', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  showError() {
    this.snackBar.open('Login fallito! Controlla le tue credenziali.', 'Chiudi', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }

}
