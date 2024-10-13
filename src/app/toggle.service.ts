import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  // BehaviorSubject inizialmente impostato su false, indica che il componente è nascosto
  private showAboutUsDetail = new BehaviorSubject<boolean>(true);

  // Observable pubblico che altri componenti possono sottoscrivere
  showDetailAboutUs$ = this.showAboutUsDetail.asObservable();

  constructor() { }

  // Metodo per cambiare lo stato di visibilità
  toggleShowAboutUsDetail() {
    this.showAboutUsDetail.next(true); // Cambia il valore attuale
  }
}
