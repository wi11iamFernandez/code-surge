import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderGlobalAppComponent } from './header-global-app/header-global-app.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { MainAboutUsComponent } from './main-about-us/main-about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderGlobalAppComponent, NavbarMainComponent, MainAboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
