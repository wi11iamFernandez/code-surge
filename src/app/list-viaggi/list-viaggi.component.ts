import { Component } from '@angular/core';
import { ViaggiService } from '../services/viaggi.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-viaggi',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './list-viaggi.component.html',
  styleUrl: './list-viaggi.component.scss'
})
export class ListViaggiComponent {

  viaggi: any[] = [];

  constructor(private viaggiService: ViaggiService) { }

  ngOnInit(): void {
    // Richiama i viaggi dal servizio
    // Abbonati ai cambiamenti dei viaggi
    this.viaggiService.viaggi$.subscribe((data) => {
      this.viaggi = data; // Aggiorna la lista di viaggi
    });
  }

  // Metodo che potrebbe essere legato al pulsante "Maggiori Informazioni"
  onMoreInfo(viaggioId: number) {
    console.log('Maggiori informazioni per il viaggio con ID:', viaggioId);
    // Aggiungi la logica per navigare o mostrare più dettagli
  }

  aggiornaViaggi(data: any) {
    this.viaggi = data;
  }

}
