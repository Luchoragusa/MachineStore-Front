import { HttpClient, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Game, GamesResponse } from '../interfaces/game';
import { tap, map, catchError, throwError } from 'rxjs';

@Injectable()
  
export class GamesService {

  constructor(private _http: HttpClient) { }

  getGames() {
    return this._http
      .get<GamesResponse[]>(`${environment.apiUrl}/api/character`)
      .pipe(
        catchError((error) => throwError(() => error)),
        tap((response: any) => console.log(response)),
        map((response: any) => {
          const games: Game[] = [];

          if (response.results) {
            response.results.map((gameItem: any) => {
              const game: Game = {
                id: gameItem.id || 0,
                name:gameItem.name || '',
              };
              games.push(game);
            });
          }

          const gamesResponse: GamesResponse = {
            count: response.info.count || 0,
            pages: response.info.pages || 0,
            next: response.info.next || null,
            prev: response.info.prev || null,
            games,
          };

          return gamesResponse;
        }));
  }







}


