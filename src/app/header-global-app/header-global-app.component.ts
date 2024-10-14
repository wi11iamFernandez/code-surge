import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header-global-app',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './header-global-app.component.html',
  styleUrl: './header-global-app.component.scss'
})
export class HeaderGlobalAppComponent {

}
