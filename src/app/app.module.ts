import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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


// Imports Video 
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
// Servicios
import { GamesService } from './services/games.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './componentes/dialog/dialog.component';
import { TableComponent } from './componentes/table/table.component';

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
    GameFoundedComponent,
    DialogComponent,
    TableComponent
  ],
  imports: [  // van los modulos
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

// imports video

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
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
