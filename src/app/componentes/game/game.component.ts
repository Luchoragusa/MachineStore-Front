import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Game, GamesResponse } from 'src/app/interfaces/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game!: Game;
  @Input() gamesResponse!: GamesResponse;
  @Output() removeChild = new EventEmitter<Game>();

  constructor(private _router: Router) { }

  ngOnInit(): void {}

  onClick(): void {
    localStorage.setItem('games', JSON.stringify(this.gamesResponse.games));
    this._router.navigate(['/cards', this.game.id]);
  }

  removeClick(): void {
    this.removeChild.emit(this.game);  
  }
}
