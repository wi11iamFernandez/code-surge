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

  constructor(private toggleService: ToggleService, private authService: AuthService) { }

  ngOnInit(): void {
    this.toggleService.showLoginIcon$.subscribe(
      (isVisible: boolean) => {
        this.showLoginIcon = isVisible;
      }
    );
  }

  toggleIconLogin(): void {
    this.toggleService.toggleShowLoginIcon(!this.showLoginIcon);
  }

  toggleIconLogoMondo(): void {
    this.showLoginIcon = !!this.authService.getToken();
    this.toggleService.toggleShowLoginIcon(!this.showLoginIcon);
  }

}
