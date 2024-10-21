import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { ApiService } from '../services/api.service';
import { HeaderGlobalAppComponent } from '../header-global-app/header-global-app.component';
import { ListViaggiComponent } from '../list-viaggi/list-viaggi.component';

@Component({
  selector: 'app-viaggi-utente',
  standalone: true,
  imports: [MatCardModule, CommonModule, LoadingSpinnerComponent, HeaderGlobalAppComponent, ListViaggiComponent],
  templateUrl: './viaggi-utente.component.html',
  styleUrl: './viaggi-utente.component.scss'
})
export class ViaggiUtenteComponent {

  viaggi: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
}
