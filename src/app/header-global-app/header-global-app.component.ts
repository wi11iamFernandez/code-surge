import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToggleService } from '../services/toggle.service';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-header-global-app',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header-global-app.component.html',
  styleUrl: './header-global-app.component.scss'
})

export class HeaderGlobalAppComponent {
  showLoginIcon: boolean = false;
  showLogoutIcon: boolean = false;

  constructor(private toggleService: ToggleService, private authService: AuthService, private apiService: ApiService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.toggleService.showLoginIcon$.subscribe(
      (isVisible: boolean) => {
        this.showLoginIcon = isVisible;
      }
    );

    this.toggleService.showLogoutIcon$.subscribe(
      (isVisible: boolean) => {
        this.showLogoutIcon = isVisible;
      }
    );
  }

  toggleIconLogin(): void {
    this.showLoginIcon = false;
    this.showLogoutIcon = false;  // Mostriamo l'icona di logout
    this.toggleService.toggleShowLoginIcon(false);  // Aggiorniamo lo stato nel servizio
    this.toggleService.toggleShowLogoutIcon(false);
  }

  toggleIconLogoMondo(): void {
    this.updateIconState();  // Aggiorniamo lo stato in base al token
    this.toggleService.toggleShowLoginIcon(this.showLoginIcon);
    this.toggleService.toggleShowLogoutIcon(this.showLogoutIcon);
  }

  logout() {
    const sToken = this.authService.getToken() || '';
    this.apiService.logout(sToken)
      .subscribe({
        next: (response: any) => {
          this.authService.clearToken();
          // Pulisci data del utente
          //this.dataUser.updateUser(response);

          this.router.navigate(['/home-detail']);
          this.toggleService.toggleShowPageDetail('about-us');
          this.toggleService.toggleShowLoginIcon(true);
          this.toggleService.toggleShowLogoutIcon(false);

          this.showSuccess(); // Mostra il messaggio di successo
        },

        error: (error) => {
          console.error('Login failed:', error);
          this.showError();

        }
      });
    this.showLoginIcon = true;
    this.showLogoutIcon = false;
    this.toggleService.toggleShowLoginIcon(true);
    this.toggleService.toggleShowLogoutIcon(false);
  }

  // Funzione per aggiornare lo stato delle icone in base al token
  updateIconState(): void {
    const token = this.authService.getToken();  // Ottieni il token
    this.showLogoutIcon = !!token;  // Se c'è un token, mostriamo l'icona di logout
    this.showLoginIcon = !this.showLogoutIcon;  // Se logout è visibile, login è nascosto e viceversa
  }

  showSuccess() {
    this.snackBar.open('Logout effettuato!', 'Chiudi', {
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
