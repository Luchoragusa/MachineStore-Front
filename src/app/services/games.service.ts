import { HttpClient, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GamesResponse, Game } from '../interfaces/game';
import { tap, map } from 'rxjs';

// Con la injeccio de componentes por medio del servicio podemos hacer uso de recursos externos

@Injectable()
  
export class GamesService {

  constructor(private _http: HttpClient) { }

  getGames() {// 'character' es porque es la API de Rick y Morty
    return this._http.get<GamesResponse>(`${environment.apiUrl}/api/character`).pipe(
      tap((response: any) => {
        console.log(response);
      }),
      map((response: any) => {
        const games: Game[] = [];

        if (response.results) {
          response.results.map((gameItem: any) => {
            const game: Game = {
              id: gameItem.id || 0,
              image: gameItem.image || '',
              name: gameItem.name || '',
              species: gameItem.species || '',
              status: gameItem.status || '',
              originName: gameItem.origin.name || '',
            };
            games.push(game);
          });
        }

          const gamesResponse: GamesResponse = {
            count: response.count || 0,
            pages: response.pages || 0,
            next: response.next || null,
            prev: response.prev || null,
            games: games
          };
          
          return gamesResponse;
      })
    );
  }
}