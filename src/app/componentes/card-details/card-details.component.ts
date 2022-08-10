import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  id = '';

  // games: Game[] = [
  //   { id: 1, name: 'Fifa 22', price: 100, description: "Powered by Football™. EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos.", valoration: 90, image: 'https://cdn.discordapp.com/attachments/852889034723426324/998782981596520529/fifa-22-ficha-2411743.webp' },
  //   { id: 2, name: 'NBA 2k22', price: 100, description: "NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players. Build your own dream team in MyTEAM with today’s stars and yesterday’s legends.", valoration: 90, image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2021/07/nba-2k22-2406663.jpg?itok=kCo2vXja' },
  //   { id: 3, name: 'F1 2022', price: 100, description: "Entra en la nueva era de la Formula 1® en EA SPORTS™ F1® 22, el videojuego oficial de FIA Formula One World Championship™ 2022", valoration: 90, image: 'https://cdn.shortpixel.ai/spai/w_977+q_lossy+ret_img+to_webp/https://realgaming101.es/wp-content/uploads/2022/05/f1-22-portada-oficial-edicion-estandar.jpg' },
  //   { id: 4, name: 'GTA V', price: 100, description: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.", valoration: 90, image: 'https://media.vandal.net/m/15192/grand-theft-auto-v-2015413122229_1.jpg' },
  //   { id: 5, name: 'Forza Horizon 5', price: 100, description: "Forza Horizon 5 es un videojuego de carreras multijugador en línea desarrollado por Playground Games y publicado por Xbox Game Studios. Es el quinto título de Forza Horizon y la duodécima entrega principal de la serie Forza. El juego está ambientado en una representación ficticia de México.", valoration: 90, image: 'https://store-images.s-microsoft.com/image/apps.49800.13718773309227929.bebdcc0e-1ed5-4778-8732-f4ef65a2f445.9ac09d39-064d-466c-81ca-2f1b6f0b95c5' },
  //   { id: 6, name: 'Valorant', price: 100, description: "Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games. El juego se anunció por primera vez con el nombre en clave Project A en octubre de 2019. Fue lanzado para Microsoft Windows el 2 de junio de 2020 después de su beta cerrada lanzada el 7 de abril de 2020.", valoration: 90, image: 'https://media.vandal.net/m/78531/valorant-202052910331074_1.jpg' },
  //   { id: 7, name: 'Fifa 21', price: 100, description: "Powered by Football™. EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos.", valoration: 90, image: 'https://cdn.discordapp.com/attachments/852889034723426324/998782981596520529/fifa-22-ficha-2411743.webp' },
  //   { id: 8, name: 'Fifa 20', price: 100, description: "Powered by Football™. EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos.", valoration: 90, image: 'https://cdn.discordapp.com/attachments/852889034723426324/998782981596520529/fifa-22-ficha-2411743.webp' },
  // ];
  game!: Game;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _games: GamesService)
  {
    // this._activatedRoute.params.subscribe((params: Params) => {
    //   if (params['cardId']) {
    //     const filtered = this.games.filter(game => game.id.toString() === params['cardId']);
    //     this.game = filtered[0];
    //   }
    // });
  }

  volverAtras() {
    window.history.back();
  }
}
