import { Component, Injectable } from '@angular/core';
import { Route, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


import { HeaderGlobalAppComponent } from './header-global-app/header-global-app.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { MainAboutUsComponent } from './main-about-us/main-about-us.component';
import { ApiService } from './services/api.service';
import { ViaggiService } from './services/viaggi.service';
import { ToggleService } from './services/toggle.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderGlobalAppComponent, NavbarMainComponent, MainAboutUsComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

@Injectable({ providedIn: 'root' })
export class AppComponent {

  constructor(private apiService: ApiService, private viaggiService: ViaggiService, private router: Router, private toggleService: ToggleService, private authService: AuthService) { }

  ngOnInit() {
    this.apiService.getViaggi().subscribe({
      next: (data) => {
        this.viaggiService.setViaggi(data);
        this.toggleService.setListaViaggi(data);
      },
      error: (err) => {
        console.error('Errore durante il caricamento dei viaggi:', err);
      }
    });


    const token = this.authService.getToken();  // Ottieni il token
    this.toggleService.toggleShowLoginIcon(!token);
    this.toggleService.toggleShowLogoutIcon(!!token);

    this.router.navigate(['/']);
  }
}
