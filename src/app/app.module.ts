import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CardComponent } from './componentes/card/card.component';
import { CardContainerComponent } from './componentes/card-container/card-container.component';
import { CardDetailsComponent } from './componentes/card-details/card-details.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SearchComponent } from './componentes/search/search.component';
import { GamesComponent } from './componentes/games/games.component';


// Servicios
import { GamesService } from './services/games.service';
import { AppRoutingModule } from './app-routing.module';
import { CardGameFoundedComponent } from './componentes/card-game-founded/card-game-founded.component';
import { ProfileComponent } from './componentes/profile/profile.component';

@NgModule({
  declarations: [ // van los componentes
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    CardContainerComponent,
    FooterComponent,
    // GameComponent,
    GamesComponent,
    CardDetailsComponent,
    SearchComponent,
    CardGameFoundedComponent,
    ProfileComponent
  ],
  imports: [  // van los modulos
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { // esta es la forma de inyectar un servicio
      provide: GamesService,
      useClass: GamesService,
    }
  ],  // van los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
