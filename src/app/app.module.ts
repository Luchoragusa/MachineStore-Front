import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AppRoutingModule} from './app-routing.module';
import {MatNativeDateModule} from '@angular/material/core';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { SearchComponent } from './modules/shared/search/search.component';
import { GameComponent } from './componentes/game/game.component';
import { GamesComponent } from './componentes/games/games.component';
import { GameFoundedComponent } from './componentes/game-founded/game-founded.component';
import { CardDetailsComponent } from './componentes/card-details/card-details.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { AlertDialogComponent } from './modules/shared/alert-dialog/alert-dialog.component';

// Servicios
import { GamesService } from './services/games.service';

@NgModule({
  declarations: [ // van los componentes
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    GamesComponent,
    CardDetailsComponent,
    SearchComponent,
    ProfileComponent,
    GameComponent,
    GameFoundedComponent,
    AlertDialogComponent
  ],
  imports: [  // van los modulos
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
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
