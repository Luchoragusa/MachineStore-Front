import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-game-founded',
  templateUrl: './card-game-founded.component.html',
  styleUrls: ['./card-game-founded.component.css']
})
export class CardGameFoundedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  games: Game[] = [
    { id: 1, name: 'Fifa 22', image: 'https://cdn.discordapp.com/attachments/852889034723426324/998782981596520529/fifa-22-ficha-2411743.webp' },
    { id: 2, name: 'NBA 2k22', image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2021/07/nba-2k22-2406663.jpg?itok=kCo2vXja' },
    { id: 3, name: 'F1 2022', image: 'https://cdn.shortpixel.ai/spai/w_977+q_lossy+ret_img+to_webp/https://realgaming101.es/wp-content/uploads/2022/05/f1-22-portada-oficial-edicion-estandar.jpg' },
    { id: 4, name: 'GTA V', image: 'https://media.vandal.net/m/15192/grand-theft-auto-v-2015413122229_1.jpg' },
    { id: 5, name: 'Forza Horizon 5', image: 'https://store-images.s-microsoft.com/image/apps.49800.13718773309227929.bebdcc0e-1ed5-4778-8732-f4ef65a2f445.9ac09d39-064d-466c-81ca-2f1b6f0b95c5' },
    { id: 6, name: 'Valorant', image: 'https://media.vandal.net/m/78531/valorant-202052910331074_1.jpg' },
    { id: 7, name: 'Fifa 21', image: 'https://cdn.discordapp.com/attachments/852889034723426324/998782981596520529/fifa-22-ficha-2411743.webp' },
];

  games_search: Game[] = [];
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.games_search = this.games.filter(game => game.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      } else {
        this.games = this.games;
      }
    });
  }
  
}
