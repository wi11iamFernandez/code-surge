import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-dialog',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatButtonModule, FormsModule],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.scss'
})
export class MyDialogComponent {
  constructor(private dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService, private snackBar: MatSnackBar, private authService: AuthService) { }

  prenota() {
    const bExistToken = !!this.authService.getToken();
    if (bExistToken) {
      this.apiService.iscrizioneViaggio(this.data.id_viaggio)
        .subscribe({
          next: (response: any) => {
            this.showSuccess();
          },

          error: (error) => {
            this.showError();
          }
        });
    } else {
      this.snackBar.open('Effettuare il login!', 'Chiudi', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
    }

    this.dialogRef.close();
  }

  showSuccess() {
    this.snackBar.open('Iscrizione effettuata!', 'Chiudi', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  showError() {
    this.snackBar.open('Non è possibile iscriversi in questo momento!', 'Chiudi', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }
}
