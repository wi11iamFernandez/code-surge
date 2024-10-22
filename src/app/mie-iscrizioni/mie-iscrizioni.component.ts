import { Component } from '@angular/core';
import { HeaderGlobalAppComponent } from '../header-global-app/header-global-app.component';
import { ListViaggiComponent } from '../list-viaggi/list-viaggi.component';

@Component({
  selector: 'app-mie-iscrizioni',
  standalone: true,
  imports: [
    HeaderGlobalAppComponent,
    ListViaggiComponent,
    
  ],
  templateUrl: './mie-iscrizioni.component.html',
  styleUrl: './mie-iscrizioni.component.scss'
})
export class MieIscrizioniComponent {

}
