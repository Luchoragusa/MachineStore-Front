import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game!: Game;

  constructor(private _router: Router) { }

  ngOnInit(): void {}

  onClick(): void {
    console.log('click', this.game);
    this._router.navigate(['/cards', this.game.id]);
  }

}
