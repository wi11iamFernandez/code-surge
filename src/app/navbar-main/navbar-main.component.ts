import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToggleService } from '../services/toggle.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar-main',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.scss'
})
export class NavbarMainComponent {
  selectedButton: string = '';
  private isVisibleAreaPersonal: boolean = false;

  constructor(private toggleService: ToggleService, private apiService: ApiService) { }

  onToggleDescription(buttonName: string) {
    this.selectedButton = buttonName;
    this.toggleService.toggleShowPageDetail(buttonName); // Chiama il metodo nel service per cambiare lo stato

    if (buttonName === 'desc-viaggi') {
      this.toggleService.setShowViaggiRichiamtiDa('all');
      this.toggleService.setTipoOperazioneViaggio('all');
      this.apiService.getViaggi()
        .subscribe({
          next: (data) => {
            this.toggleService.setListaViaggi(data);
          },
          error: (err) => {
            console.error('Errore durante il caricamento dei viaggi:', err);
          }
        });
    }
  }

  getVisibilityAreaPersonal() {
    this.isVisibleAreaPersonal = this.toggleService.getVisibilityIconLogout();
    return this.isVisibleAreaPersonal;
  }


}
