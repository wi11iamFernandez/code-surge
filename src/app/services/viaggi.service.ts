import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaggiService {

  private viaggiSource = new BehaviorSubject<any[]>([]);
  viaggi$ = this.viaggiSource.asObservable();

  constructor() { }

  // Metodo per salvare i viaggi in cache
  setViaggi(viaggi: any[]) {
    this.viaggiSource.next(viaggi);
  }

  // Metodo per ottenere i viaggi (da cache o da API)
  getViaggi() {
    return this.viaggiSource.getValue();
  }

  // Pulisci la cache dei viaggi (esempio: al logout)
  clearViaggi() {
    this.viaggiSource.next([]);
  }
}
