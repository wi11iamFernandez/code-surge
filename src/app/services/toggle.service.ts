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

  // BehaviorSubject per gestire la visibilità dell'icona di logout
  private showLogoutIcon = new BehaviorSubject<boolean>(false);

  // BehaviorSubject per gestire la lista dei viaggi da visualizzare
  private showViaggiRichiamatiDa = new BehaviorSubject<string>('all');

  // BehaviorSubject per mantenere lo stato del viaggio corrente
  private viaggioSubject = new BehaviorSubject<any>(null); // Inizialmente null

  // BehaviorSubject per capire la gestione del viaggio
  private gestioneViaggio = new BehaviorSubject<string>('miei-viaggi');

  // BehaviorSubject per gestire la lista dei viaggi
  private listaViaggi = new BehaviorSubject<any[]>([]); // Lista inizialmente vuota


  // Observable pubblico che altri componenti possono sottoscrivere
  showDetailPage$ = this.showPageDetail.asObservable();
  showLoginIcon$ = this.showLoginIcon.asObservable();
  showLogoutIcon$ = this.showLogoutIcon.asObservable();
  showViaggiRichiamatiDa$ = this.showViaggiRichiamatiDa.asObservable();
  viaggio$ = this.viaggioSubject.asObservable(); // Observable a cui si possono iscrivere i componenti
  tipoOperazioneViaggio$ = this.gestioneViaggio.asObservable();
  // Observable pubblico per la lista dei viaggi
  listaViaggi$ = this.listaViaggi.asObservable();

  constructor() { }

  // Metodo per ottenere la lista dei viaggi attuale
  getListaViaggi(): any[] {
    return this.listaViaggi.getValue();
  }

  // Metodo per aggiornare la lista dei viaggi
  setListaViaggi(nuovaListaViaggi: any[]): void {
    this.listaViaggi.next(nuovaListaViaggi);
  }

  setTipoOperazioneViaggio(tipoOperazione: string) {
    this.gestioneViaggio.next(tipoOperazione);
  }

  getTipoOperazioneViaggio(): any {
    return this.gestioneViaggio.getValue();
  }

  // Metodo per aggiornare il viaggio
  setViaggio(viaggio: any): void {
    this.viaggioSubject.next(viaggio);
  }

  // Metodo per ottenere il viaggio corrente
  getViaggio(): any {
    return this.viaggioSubject.getValue();
  }

  // Metodo per cambiare quali viaggi guardare
  setShowViaggiRichiamtiDa(tipoUtente: string) {
    this.showViaggiRichiamatiDa.next(tipoUtente); // Cambia il valore attuale
  }

  getShowViaggiRichiamatiDa() {
    return this.showViaggiRichiamatiDa.getValue();
  }

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

  // Metodo per cambiare la visibilità dell'icona di login
  toggleShowLogoutIcon(bVal: boolean) {
    this.showLogoutIcon.next(bVal); // Cambia lo stato di visibilità dell'icona di login
  }

  // Metodo per ottenere la visibilità attuale dell'icona di login (sincrono)
  getVisibilityIconLogout() {
    return this.showLogoutIcon.getValue();
  }

}
