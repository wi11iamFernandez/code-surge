import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;
  private keyToken = 'token';

  constructor() {
    if (this.isBrowser()) {
      const savedData = localStorage.getItem(this.keyToken);
      if (savedData) {
        this.token = savedData;
      }
    }
  }

  // Metodo per verificare se ci troviamo in un ambiente browser
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Salva il token
  setToken(val: string) {
    this.token = val;
    if (this.isBrowser()) {
      localStorage.setItem(this.keyToken, val);
    }
  }

  // Ottieni il token
  getToken(): string | null {
    return this.token;
  }

  // Metodo per rimuovere i dati
  clearToken() {
    this.token = null;
    if (this.isBrowser()) {
      localStorage.removeItem(this.keyToken);  // Rimuove i dati dal localStorage
    }
  }

  // Verifica se l'utente è autenticato
  isAuthenticated(): boolean {
    return this.token !== null;
  }
}
