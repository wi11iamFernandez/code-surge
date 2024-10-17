import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

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
    MatIconModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  hidePassword = true;
  hideRepeatPassword = true;
  genders = ['Maschio', 'Femmina', 'Altro'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      data_nascita: ['', Validators.required],
      genere: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid && this.passwordsMatch()) {
      const { email, password, telefono, nome, cognome, data_nascita, genere } = this.registerForm.value;
      const body = { email, password, telefono, nome, cognome, data_nascita, genere };

      this.http.post('http://localhost:9006/api/auth/register', body)
        .subscribe({
          next: (response: any) => {
            console.log('Registration successful', response);
            this.router.navigate(['/login']); // Reindirizza al login o altra pagina
          },
          error: (error) => {
            console.error('Registration failed', error);
          }
        });
    }
  }

  passwordsMatch(): boolean {
    return this.registerForm.value.password === this.registerForm.value.repeatPassword;
  }

}
