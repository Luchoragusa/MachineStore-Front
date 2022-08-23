import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http : HttpClient) {  }

    postGame(data : any){
      return this.http.post<any>("http://localhost:3000/gameList", data);
    }

    // getGames(){
    //   return this.http.get<any>("http://localhost:3000/gameList");
    // }

    getGames(){
      return this.http.get<any>(`${environment.apiNode}/game`);
    }
}
