import { HttpClient, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// Con la injeccio de componentes por medio del servicio podemos hacer uso de recursos externos

@Injectable()
  
export class GamesService {

  constructor(private _http: HttpClient) { }

  getGames() {
    return this._http.get(`${environment.apiUrl}/api/character`);   // 'character' es porque es la API de Rick y Morty
  }
}