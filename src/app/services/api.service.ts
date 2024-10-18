import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:9006';

  constructor(private http: HttpClient) { }

  // Chiamata API per registrare un utente
  registerUser(registerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/register`, registerData);
  }

  // Chiamata API per autenticare un utente
  authenticateUser(authData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/authenticate`, authData);
  }

  // Chiamata API per ottenere informazioni sull'utente
  getUserInfo(tokenData: string): Observable<any> {
    // Creiamo gli headers con il token JWT
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenData}`);
    return this.http.get(`${this.baseUrl}/api/utente/me`, { headers });
  }

  getViaggi(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/viaggio/all`);
  }

  getViaggiFilter(filterData: any): Observable<any> {
    let params = new HttpParams();

    // Aggiungi i parametri di filtro solo se sono presenti
    for (const key in filterData) {
      if (filterData[key]) {
        params = params.append(key, filterData[key]);
      }
    }
    return this.http.get(`${this.baseUrl}/api/viaggio/filter`, { params });
  }

  logout(tokenData: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenData}`);
    return this.http.post(`${this.baseUrl}/api/auth/logout`, {}, { headers });
  }

}
