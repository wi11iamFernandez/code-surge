import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


import { HeaderGlobalAppComponent } from './header-global-app/header-global-app.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { MainAboutUsComponent } from './main-about-us/main-about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderGlobalAppComponent, NavbarMainComponent, MainAboutUsComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
