import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {

  // constructor (private _gamesService: GamesService) {

  // }

    games: Game[] = [
        { id: 12, name: 'Fifa 22' },
        { id: 13, name: 'NBA 2k2' },
        { id: 14, name: 'F1 2022' },
        { id: 15, name: 'GTA V' },
        { id: 16, name: 'Forza Horizon 5' },
        { id: 17, name: 'Diablo Immortal' },
        { id: 18, name: 'LOL' },
        { id: 19, name: 'CS:GO' },
        { id: 20, name: 'Valorant' }
      ];
}
