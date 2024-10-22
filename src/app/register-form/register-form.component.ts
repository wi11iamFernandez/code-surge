import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { ToggleService } from '../services/toggle.service';
import { HeaderGlobalAppComponent } from '../header-global-app/header-global-app.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    LoadingSpinnerComponent,
    HeaderGlobalAppComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  hidePassword = true;
  hideRepeatPassword = true;
  genders = ['MASCHIO', 'FEMMINA', 'ALTRO'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toggleService: ToggleService,
    private apiService: ApiService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(12), Validators.pattern(
        // Almeno una maiuscola, una minuscola, un numero e un carattere speciale
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/
      )]],
      repeatPassword: ['', [Validators.required, this.passwordMatchValidator.bind(this)]],
      telefono: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      data_nascita: ['', Validators.required],
      genere: [''],
    });
  }

  get password() {
    return this.registerForm.get('password');
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = this.registerForm?.get('password')?.value; // Ottieni il valore della password
    const repeatPassword = control.value; // Ottieni il valore di repeatPassword
    return password === repeatPassword ? null : { mismatch: true }; // Restituisci null se corrispondono, altrimenti un errore
  }

  onSubmit(): void {
    if (this.registerForm.valid && !this.passwordsMatch()) {
      const genere = this.registerForm.value.genere ? this.registerForm.value.genere : 'NN';
      const { email, password, telefono, nome, cognome, data_nascita } = this.registerForm.value;
      const body = { email, password, telefono, nome, cognome, data_nascita, genere };

      this.apiService.registerUser(body)
        .subscribe({
          next: (response: any) => {
            console.log('Registration successful', response);
            this.router.navigate(['/login-component']); // Reindirizza al login o altra pagina
            this.toggleService.toggleShowLoginIcon(true);
            this.toggleService.toggleShowLogoutIcon(false);
          },
          error: (error) => {
            console.error('Registration failed', error);
          }
        });
    }
  }

  passwordsMatch(): boolean {
    return this.registerForm.value.password !== this.registerForm.value.repeatPassword;
  }

}
