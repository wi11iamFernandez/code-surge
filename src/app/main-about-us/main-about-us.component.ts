import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-about-us.component.html',
  styleUrl: './main-about-us.component.scss'
})
export class MainAboutUsComponent implements OnInit {
  currentPage: string = 'about-us'; // Stato locale per la visibilità

  constructor(private toggleService: ToggleService) { } // Inietta il servizio

  // Sottoscrizione all'Observable del servizio
  ngOnInit() {
    this.toggleService.showDetailPage$.subscribe(show => {
      this.currentPage = show; // Aggiorna la visibilità ogni volta che cambia lo stato
    });
  }
}
