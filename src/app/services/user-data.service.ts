import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // Usando BehaviorSubject possiamo tenere traccia dello stato e fornire il valore corrente a chiunque si iscriva
  private userSource = new BehaviorSubject<any>(null);
  // Gestione dello stato del utente
  currentUser$ = this.userSource.asObservable();

  constructor() { }


  // Metodo per aggiornare lo stato dell'utente
  updateUser(user: any) {
    this.userSource.next(user);
  }

  // Metodo per ottenere l'utente corrente (sincrono)
  getCurrentUser() {
    return this.userSource.getValue();
  }

  // Metodo per resettare lo stato dell'utente e del token (logout ad esempio)
  clearUserData() {
    this.userSource.next(null);
  }
}
