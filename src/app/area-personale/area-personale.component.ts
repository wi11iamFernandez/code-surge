import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleService } from '../services/toggle.service';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-area-personale',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './area-personale.component.html',
  styleUrl: './area-personale.component.scss'
})
export class AreaPersonaleComponent {

  constructor(private toggleService: ToggleService, private apiService: ApiService, private snackBar: MatSnackBar, private router: Router) { }

  onAreaViaggiUtente() {
    this.toggleService.setShowViaggiRichiamtiDa('me')
    this.toggleService.setTipoOperazioneViaggio('miei-viaggi-creati');
    this.apiService.mieiViaggiCreati()
      .subscribe({
        next: (response) => {
          if (response.length !== 0) {
            this.toggleService.setListaViaggi(response);
            this.router.navigate(['/viaggi-utente']);
          } else {
            this.showError('Non hai creato nessun viaggio!');
          }
        },
        error: (error) => {
          this.showError('Errore nella creazione del viaggio.');
        }
      });
  }

  onCreaViaggio() {
    this.toggleService.setShowViaggiRichiamtiDa('me')
    this.toggleService.setTipoOperazioneViaggio('miei-viaggi-creati');
  }

  onMieIscrizioni() {
    this.toggleService.setShowViaggiRichiamtiDa('me')
    this.toggleService.setTipoOperazioneViaggio('mie-iscrizioni');

    this.apiService.mieiViaggiIscritti()
      .subscribe({
        next: (response) => {
          if (response.length !== 0) {
            this.toggleService.setListaViaggi(response);
            this.router.navigate(['/mie-iscrizioni']);
          } else {
            this.showError('Non sei ancora iscritto ad un viaggio!');
          }
        },
        error: (error) => {
          this.showError('Errore nella creazione del viaggio.');
        }
      });
  }

  showSuccess(message: string) {
    this.snackBar.open('Viaggio creato con successo!', 'Chiudi', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  showError(message:string) {
    this.snackBar.open(message, 'Chiudi', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }
}
