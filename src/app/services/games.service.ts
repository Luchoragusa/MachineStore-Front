import { HttpClient, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GamesResponse } from '../interfaces/game';
import { tap, map } from 'rxjs';

// Con la injeccio de componentes por medio del servicio podemos hacer uso de recursos externos

@Injectable()
  
export class GamesService {

  constructor(private _http: HttpClient) { }

  getGames() {// 'character' es porque es la API de Rick y Morty
    return this._http.get<GamesResponse>(`${environment.apiUrl}/api/character`).pipe(
      // tap((response: any) => {
      //   console.log(response);
      // }),
      map((response: any) => {
        const gamesResponse: GamesResponse = {
          count: response.count || 0,
          pages: response.pages || 0,
          next: response.next || null,
          prev: response.prev || null,
          games: []
        };

        return gamesResponse;
      })
    );
  }
}