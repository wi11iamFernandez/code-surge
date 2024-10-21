import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleService } from '../services/toggle.service';

@Component({
  selector: 'app-area-personale',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './area-personale.component.html',
  styleUrl: './area-personale.component.scss'
})
export class AreaPersonaleComponent {

  constructor(private toggleService: ToggleService) { }

  onAreaViaggiUtente() {
    this.toggleService.setShowViaggiRichiamtiDa('me')
    this.toggleService.setTipoOperazioneViaggio('miei-viaggi');
  }

  onCreaViaggio() {
    this.toggleService.setShowViaggiRichiamtiDa('me')
    this.toggleService.setTipoOperazioneViaggio('crea-viaggio');
  }
}
