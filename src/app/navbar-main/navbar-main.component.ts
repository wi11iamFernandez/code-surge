import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToggleService } from '../toggle.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-main',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.scss'
})
export class NavbarMainComponent {
  constructor(private toggleService: ToggleService) { }

  onToggleDescriptionAboutUs() {
    this.toggleService.toggleShowAboutUsDetail(); // Chiama il metodo nel service per cambiare lo stato
  }

}
