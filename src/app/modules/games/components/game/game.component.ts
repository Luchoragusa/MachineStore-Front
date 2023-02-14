import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Game } from '../../interface/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game!: Game;

  image!: string
  
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.image = `${environment.url}/${this.game.image}`;
  }

  onClick(): void {
    this._router.navigate(['/store/game/', this.game.id]);
  }
}
