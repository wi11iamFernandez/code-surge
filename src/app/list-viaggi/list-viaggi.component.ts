import { Component } from '@angular/core';
import { ViaggiService } from '../services/viaggi.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../popup/my-dialog/my-dialog.component';

@Component({
  selector: 'app-list-viaggi',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './list-viaggi.component.html',
  styleUrl: './list-viaggi.component.scss'
})
export class ListViaggiComponent {

  viaggi: any[] = [];

  constructor(private viaggiService: ViaggiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    // Richiama i viaggi dal servizio
    // Abbonati ai cambiamenti dei viaggi
    this.viaggiService.viaggi$.subscribe((data) => {
      this.viaggi = data; // Aggiorna la lista di viaggi
    });
  }

  onMoreInfo(viaggioId: number) {
    this.dialog.open(MyDialogComponent, {
      width: '70vw',
      data: this.viaggi.find((element) => element.id_viaggio === viaggioId)
    });
  }

  aggiornaViaggi(data: any) {
    this.viaggi = data;
  }

}
