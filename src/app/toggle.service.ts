import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  // BehaviorSubject inizialmente impostato su false, indica che il componente è nascosto
  private showPageDetail = new BehaviorSubject<string>('about-us');

  // Observable pubblico che altri componenti possono sottoscrivere
  showDetailPage$ = this.showPageDetail.asObservable();

  constructor() { }

  // Metodo per cambiare la parola chiave della pagina attuale
  toggleShowPageDetail(page: string) {
    this.showPageDetail.next(page); // Cambia il valore attuale
  }

  // Metodo per ottenere la parola chiave attuale (sincrono)
  getCurrentPage() {
    return this.showPageDetail.getValue();
  }
}
