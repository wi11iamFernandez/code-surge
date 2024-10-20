import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderGlobalAppComponent } from '../header-global-app/header-global-app.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crea-viaggio',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HeaderGlobalAppComponent,
    RouterLink,
    RouterLinkActive,
    LoadingSpinnerComponent
  ],
  templateUrl: './crea-viaggio.component.html',
  styleUrl: './crea-viaggio.component.scss'
})
export class CreaViaggioComponent {
  viaggioForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private snackBar: MatSnackBar) {
    this.viaggioForm = this.fb.group({
      nome: ['', Validators.required],
      descrizione: [''],
      area: ['', Validators.required],
      nazione: ['', Validators.required],
      data_partenza: ['', Validators.required],
      data_arrivo: ['', Validators.required],
      luogo_partenza: ['', Validators.required],
      luogo_arrivo: ['', Validators.required],
      numero_minimo: [3, Validators.min(3)],
      costo: [0, Validators.min(0)],
      approvato: [false],
      confermato: [false]
    });
  }

  // Funzione per gestire il salvataggio del viaggio
  onSave() {
    if (this.viaggioForm.valid) {
      const viaggioData = this.viaggioForm.value;

      this.apiService.createViaggio(viaggioData)
        .subscribe({
          next: (response) => {
            this.showSuccess();
          },
          error: (error) => {
            this.showError();
          }
        });
    } else {
      this.snackBar.open('Errore nella compilazione dei dati.', 'Chiudi', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }

  showSuccess() {
    this.snackBar.open('Viaggio creato con successo!', 'Chiudi', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  showError() {
    this.snackBar.open('Errore nella creazione del viaggio.', 'Chiudi', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }

}
