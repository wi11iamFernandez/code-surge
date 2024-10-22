import { Component } from '@angular/core';
import { ViaggiService } from '../services/viaggi.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../popup/my-dialog/my-dialog.component';
import { ToggleService } from '../services/toggle.service';
import { ApiService } from '../services/api.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-viaggi',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './list-viaggi.component.html',
  styleUrl: './list-viaggi.component.scss'
})
export class ListViaggiComponent {

  viaggi: any[] = [];

  utente: any = 'all';

  tipoOperazione: any = 'all';

  constructor(private viaggiService: ViaggiService, private dialog: MatDialog, private toggleService: ToggleService, private apiService: ApiService,
    private snackBar: MatSnackBar, private router: Router
  ) { }

  ngOnInit(): void {
    this.utente = this.toggleService.getShowViaggiRichiamatiDa();
    this.tipoOperazione = this.toggleService.getTipoOperazioneViaggio();

    this.toggleService.listaViaggi$.subscribe((viaggi) => {
      this.viaggi = viaggi; // Aggiorna la lista di viaggi nel componente
    });

    /*
    if (this.utente === 'all') {
      this.apiService.getViaggi()
        .subscribe({
          next: (response: any) => {
            this.viaggi = response;
          },

          error: (error) => {
            console.error('Check ws viaggi all');
          }
        });
    } else if (this.utente === 'me') {
      if (this.tipoOperazione === 'miei-viaggi-creati') {
        this.apiService.mieiViaggiCreati()
          .subscribe({
            next: (response: any) => {
              this.viaggi = response;
              if (response.length === 0) {
                this.showSuccess('Non ci sono viaggi');
              }
            },

            error: (error) => {
              console.error('Check ws viaggi me');
            }
          });

      } else if (this.tipoOperazione === 'mie-iscrizioni') {
        this.apiService.mieiViaggiIscritti()
          .subscribe({
            next: (response: any) => {
              this.viaggi = response;
              if (response.length === 0) {
                this.showSuccess('Non ci sono viaggi');
                //this.router.navigate(['/home-detail']);
              }
            },

            error: (error) => {
              console.error('Check ws viaggi me');
            }
          });
      }
          */
    
  }

  onMoreInfo(viaggioId: number) {
    this.dialog.open(MyDialogComponent, {
      width: '70vw',
      data: this.viaggi.find((element) => element.id_viaggio === viaggioId)
    });
  }

  onModificaViaggio(viaggioId: number) {
    const viaggio = this.viaggi.find((element) => element.id_viaggio === viaggioId);
    this.toggleService.setViaggio(viaggio); // Imposta il viaggio corrente
    this.toggleService.setTipoOperazioneViaggio('miei-viaggi');
  }

  onAnnullaIscrizione(viaggioId: number) {
    //const viaggio = this.viaggi.find((element) => element.id_viaggio === viaggioId);
    //this.toggleService.setViaggio(viaggio); // Imposta il viaggio corrente
    //this.toggleService.setTipoOperazioneViaggio('miei-viaggi');

    this.apiService.annullaIscrizione(viaggioId)
    .subscribe({
      next: (response: any) => {
        this.viaggi = response;
        if (response.length === 0) {
          this.router.navigate(['/home-detail']);
        }
        this.showSuccess('Iscrizione annullata!');
      },

      error: (error) => {
        console.error("Errore nel annullamento del iscrizione del viaggio");
      }
    });
  }

  onEliminaViaggio(viaggioId: number) {
    //const viaggio = this.viaggi.find((element) => element.id_viaggio === viaggioId);
    //this.toggleService.setViaggio(viaggio); // Imposta il viaggio corrente
    //this.toggleService.setTipoOperazioneViaggio('miei-viaggi');
    this.apiService.cancellaViaggioCreato(viaggioId)
      .subscribe({
        next: (response: any) => {
          this.viaggi = response;
          if (response.length === 0) {
            this.router.navigate(['/home-detail']);
          }
          this.showSuccess('Viaggio eliminato con successo!');
        },

        error: (error) => {
          console.error('Errore nella cancellazione del viaggio');
        }
      });
  }

  showSuccess(message: string) {
    this.snackBar.open(message, 'Chiudi', {
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
