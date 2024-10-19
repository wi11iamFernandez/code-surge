import { Component, Injectable } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../services/user-data.service';
import { ApiService } from '../services/api.service';
import { HeaderGlobalAppComponent } from '../header-global-app/header-global-app.component';
import { ToggleService } from '../services/toggle.service';
import { FooterComponent } from '../footer/footer.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HeaderGlobalAppComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})

@Injectable({ providedIn: 'root' })
export class LoginFormComponent {
  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar, private router: Router, private authService: AuthService, private dataUser: UserDataService, private apiService: ApiService, private toggleService: ToggleService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.apiService.authenticateUser({ email, password })
        .subscribe({
          next: (response: any) => {
            // Salva il token nel servizio
            this.authService.setToken(response.token);

            this.getUtenteAuth();
          },

          error: (error) => {
            console.error('Login failed:', error);
            this.showError();

          }
        });
    }
  }

  getUtenteAuth() {
    const sToken = this.authService.getToken() || '';
    this.apiService.getUserInfo(sToken)
      .subscribe({
        next: (response: any) => {
          this.showSuccess(); // Mostra il messaggio di successo

          // Salva l'utente nel servizio
          this.dataUser.updateUser(response);

          this.router.navigate(['/home-detail']);
          this.toggleService.toggleShowPageDetail('desc-area-personale');
          this.toggleService.toggleShowLoginIcon(false);
          this.toggleService.toggleShowLogoutIcon(true);
        },

        error: (error) => {
          console.error('Login failed:', error);
          this.showError();

        }
      });
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

  onRegister() {
    this.router.navigate(['/register-form']);
  }

}
