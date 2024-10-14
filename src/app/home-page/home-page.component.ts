import { Component } from '@angular/core';
import { HeaderGlobalAppComponent } from '../header-global-app/header-global-app.component';
import { NavbarMainComponent } from '../navbar-main/navbar-main.component';
import { MainAboutUsComponent } from '../main-about-us/main-about-us.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderGlobalAppComponent, NavbarMainComponent, MainAboutUsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
