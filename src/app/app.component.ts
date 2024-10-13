import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderGlobalAppComponent } from './header-global-app/header-global-app.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderGlobalAppComponent, NavbarMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'code-surge';
}
