import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Game } from '../games/interface/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {

  urlG = environment.url + '/games';
  urlC = environment.url + '/categories';
  urlD = environment.url + '/developers';

  constructor(private _http: HttpClient) {}

  getGame(gameId: number) {
    return this._http.get(`${this.urlG}/${gameId}`)
  }

  getGamesByType(type: string, typeId?: number): Observable<Game[]> | any {
    if (type === 'category') {
      return this._http.get(`${this.urlC}/${typeId}/games`);
    }
    else if (type === 'developer') {
      return this._http.get(`${this.urlD}/${typeId}/games`);
    }
    else if(type === 'game') {
      return this._http.get<Game[]>(`${this.urlG}/`);
    }
  }

  getTypeOfStuff(typeId: number, type: string) {
    if (type === 'category') {
      return this._http.get(`${this.urlC}/${typeId}`);
    }
    else if (type === 'developer') {
      return this._http.get(`${this.urlD}/${typeId}`);
    }
    else {
      return this._http.get(`${this.urlG}`);
    }
  }

  getAllTypesOfStuff(type: string) {
    if (type === 'category') {
      return this._http.get(`${this.urlC}`);
    }
    else if (type === 'developer') {
      return this._http.get(`${this.urlD}`);
    }
    else {
      return this._http.get(`${this.urlG}`);
    }
  }

  createTypeOf(type: any, typeOf: string): Observable<Object> | any {
    if (typeOf === 'category') {
      return this._http.post(`${this.urlC}`, type);
    }
    else if (typeOf === 'developer') {
      return this._http.post(`${this.urlD}`, type);
    }
    else if(typeOf === 'game') {
      return this._http.post(`${this.urlG}`, type);
    }
    else {
      console.error('Error: No se ha podido crear el tipo de elemento');
    }
  }

  updateTypeOf(typeId: number, type: any, typeOf: string) {
    if (typeOf === 'category') {
      return this._http.patch(`${this.urlC}/${typeId}`, type);
    }
    else if (typeOf === 'developer') {
      return this._http.patch(`${this.urlD}/${typeId}`, type);
    }
    else if (typeOf === 'game') {
      return this._http.patch(`${this.urlG}/${typeId}`, type);
    }
    else {
      return this._http.get(`${this.urlG}`);
    }
  }

  deleteTypeOf(typeId: number, typeOf: string): Observable<Object> | any {
    if (typeOf === 'category') {
      return this._http.delete(`${this.urlC}/${typeId}`);
    }
    else if (typeOf === 'developer') {
      return this._http.delete(`${this.urlD}/${typeId}`);
    }
    else if (typeOf === 'game') {
      return this._http.delete(`${this.urlG}/${typeId}`);
    }
    else {
      console.error('Error: No se ha podido eliminar el tipo de elemento');
    }
  }

}
