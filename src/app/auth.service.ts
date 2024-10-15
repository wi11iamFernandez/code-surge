import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  constructor() { }

  // Salva il token
  setToken(token: string) {
    this.token = token;
  }

  // Ottieni il token
  getToken(): string | null {
    return this.token;
  }

  // Verifica se l'utente è autenticato
  isAuthenticated(): boolean {
    return this.token !== null;
  }
}
