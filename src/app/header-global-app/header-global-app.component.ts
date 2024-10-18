import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToggleService } from '../toggle.service';
import { AuthService } from '../services/auth.service';


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

  constructor(private toggleService: ToggleService, private authService: AuthService) { }

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
    //this.authService.logout();  // Logout effettivo
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

}
