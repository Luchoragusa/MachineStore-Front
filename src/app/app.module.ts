import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CardComponent } from './componentes/card/card.component';
import { CardContainerComponent } from './componentes/card-container/card-container.component';
import { FooterComponent } from './componentes/footer/footer.component';

// Servicios
import { GamesService } from './services/games.service';
import { GamesComponent } from './componentes/games/games.component';

@NgModule({
  declarations: [ // van los componentes
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    CardContainerComponent,
    FooterComponent,
    GamesComponent
  ],
  imports: [  // van los modulos
    BrowserModule
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
