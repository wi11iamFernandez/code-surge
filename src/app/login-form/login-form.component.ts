import { Component, Injectable } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

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

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
          next: (response) => {
            // Gestisci la risposta, ad esempio, memorizza il token o reindirizza
            console.log('Login successful:', response);
            
          },
          error: (error) => {
            console.error('Login failed:', error);
            
          }
        });
    }
  }

}
