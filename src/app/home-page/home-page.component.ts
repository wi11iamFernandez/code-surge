import { Component } from '@angular/core';
import { HeaderGlobalAppComponent } from '../header-global-app/header-global-app.component';
import { NavbarMainComponent } from '../navbar-main/navbar-main.component';
import { MainAboutUsComponent } from '../main-about-us/main-about-us.component';
import { ToggleService } from '../toggle.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DetailViaggiComponent } from '../detail-viaggi/detail-viaggi.component';
import { ContattaciDetailComponent } from '../contattaci-detail/contattaci-detail.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderGlobalAppComponent, NavbarMainComponent, MainAboutUsComponent, CommonModule, RouterLink, RouterLinkActive, RouterOutlet, DetailViaggiComponent, ContattaciDetailComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  currentPage: string = 'about-us';

  constructor(private toggleService: ToggleService) { }

  // Sottoscrizione all'Observable del servizio
  ngOnInit() {
    this.toggleService.showDetailPage$.subscribe(show => {
      this.currentPage = show; // Aggiorna la visibilità ogni volta che cambia lo stato
    });
  }

}
