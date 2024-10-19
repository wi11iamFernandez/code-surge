import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToggleService } from '../services/toggle.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

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

  constructor(private toggleService: ToggleService) { }

  onToggleDescription(buttonName: string) {
    this.selectedButton = buttonName;
    this.toggleService.toggleShowPageDetail(buttonName); // Chiama il metodo nel service per cambiare lo stato
  }

  getVisibilityAreaPersonal() {
    this.isVisibleAreaPersonal = this.toggleService.getVisibilityIconLogout();
    return this.isVisibleAreaPersonal;
  }


}
