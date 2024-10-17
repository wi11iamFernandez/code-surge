import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  // BehaviorSubject inizialmente impostato su pagina main-about-us, indica che solo quel componente è visibile
  private showPageDetail = new BehaviorSubject<string>('about-us');

  // BehaviorSubject per gestire la visibilità dell'icona di login
  private showLoginIcon = new BehaviorSubject<boolean>(true);

  // Observable pubblico che altri componenti possono sottoscrivere
  showDetailPage$ = this.showPageDetail.asObservable();
  showLoginIcon$ = this.showLoginIcon.asObservable();

  constructor() { }

  // Metodo per cambiare la parola chiave della pagina attuale
  toggleShowPageDetail(page: string) {
    this.showPageDetail.next(page); // Cambia il valore attuale
  }

  // Metodo per ottenere la parola chiave attuale (sincrono)
  getCurrentPage() {
    return this.showPageDetail.getValue();
  }

  // Metodo per cambiare la visibilità dell'icona di login
  toggleShowLoginIcon(bVal: boolean) {
    this.showLoginIcon.next(bVal); // Cambia lo stato di visibilità dell'icona di login
  }

  // Metodo per ottenere la visibilità attuale dell'icona di login (sincrono)
  getVisibilityIconLogin() {
    return this.showLoginIcon.getValue();
  }
}
