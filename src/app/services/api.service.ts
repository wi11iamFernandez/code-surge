import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:9006';

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  // Chiamata API per registrare un utente
  registerUser(registerData: any): Observable<any> {
    this.loadingService.show();
    return this.http.post(`${this.baseUrl}/api/auth/register`, registerData).pipe(
      finalize(() => this.loadingService.hide())  // Nascondi il caricamento quando l'operazione è completata
    );
  }

  // Chiamata API per autenticare un utente
  authenticateUser(authData: any): Observable<any> {
    this.loadingService.show();
    return this.http.post(`${this.baseUrl}/api/auth/authenticate`, authData).pipe(
      finalize(() => this.loadingService.hide())  // Nascondi il caricamento quando l'operazione è completata
    );
  }

  // Chiamata API per ottenere informazioni sull'utente
  getUserInfo(tokenData: string): Observable<any> {
    this.loadingService.show();
    // Creiamo gli headers con il token JWT
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenData}`);
    return this.http.get(`${this.baseUrl}/api/utente/me`, { headers }).pipe(
      finalize(() => this.loadingService.hide())  // Nascondi il caricamento quando l'operazione è completata
    );
  }

  getViaggi(): Observable<any> {
    this.loadingService.show();
    return this.http.get(`${this.baseUrl}/api/viaggio/all`).pipe(
      finalize(() => this.loadingService.hide())  // Nascondi il caricamento quando l'operazione è completata
    );
  }

  getViaggiFilter(filterData: any): Observable<any> {
    this.loadingService.show();
    let params = new HttpParams();

    // Aggiungi i parametri di filtro solo se sono presenti
    for (const key in filterData) {
      if (filterData[key]) {
        params = params.append(key, filterData[key]);
      }
    }
    return this.http.get(`${this.baseUrl}/api/viaggio/filter`, { params }).pipe(
      finalize(() => this.loadingService.hide())  // Nascondi il caricamento quando l'operazione è completata
    );
  }

  logout(tokenData: string): Observable<any> {
    this.loadingService.show();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenData}`);
    return this.http.post(`${this.baseUrl}/api/auth/logout`, {}, { headers }).pipe(
      finalize(() => this.loadingService.hide())  // Nascondi il caricamento quando l'operazione è completata
    );
  }

}
