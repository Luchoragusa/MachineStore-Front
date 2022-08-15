import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SearchComponent } from './componentes/search/search.component';
import { GameComponent } from './componentes/game/game.component';
import { GamesComponent } from './componentes/games/games.component';
import { GameFoundedComponent } from './componentes/game-founded/game-founded.component';
import { CardDetailsComponent } from './componentes/card-details/card-details.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { FooterComponent } from './componentes/footer/footer.component';

// Servicios
import { GamesService } from './services/games.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ // van los componentes
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    GamesComponent,
    CardDetailsComponent,
    SearchComponent,
    ProfileComponent,
    GameComponent,
    GameFoundedComponent
  ],
  imports: [  // van los modulos
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide: GamesService,
      useClass: GamesService,
    }
  ],  // van los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
