import {TokenInterceptorService} from './services/token-interceptor.service';

// import modules

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
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
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { GamesRoutingModule } from './modules/games/games-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

// import components

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AlertDialogComponent } from './modules/shared/alert-dialog/alert-dialog.component';
import { LogoutComponent } from './modules/auth/components/logout/logout.component';
import { NotfoundComponent } from './modules/shared/notfound/notfound.component';
import { GameComponent } from './modules/games/components/game/game.component';
import { StoreComponent } from './modules/games/views/store/store.component';
import { GameDetailsComponent } from './modules/games/views/game-details/game-details.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { AdminComponent } from './modules/admin/admin.component';
import { UsersListComponent } from './modules/admin/users-list/users-list.component';
import { UsersComponent } from './modules/users/users.component';
import { EditUserComponent } from './modules/admin/users-list/actionComponents/edit-user/edit-user.component';
import { DeleteUserComponent } from './modules/admin/users-list/actionComponents/delete-user/delete-user.component';
import { GamesListComponent } from './modules/admin/games-list/games-list.component';
import { EditGameComponent } from './modules/admin/games-list/edit-game/edit-game.component';
import { DeleteGameComponent } from './modules/admin/games-list/delete-game/delete-game.component';
import { CreateGameComponent } from './modules/admin/games-list/create-game/create-game.component';
import { AlertifyService } from './modules/services/alertify.service';
import { ProfileComponent } from './modules/users/profile/profile.component';
import { TableComponent } from './modules/shared/table/table.component';
import { ConfirmDialogComponent } from './modules/shared/confirm-dialog/confirm-dialog.component';
import { EditUserGameComponent } from './modules/shared/table/actionsUserGame/edit-user-game/edit-user-game.component';
import { DeleteUserGameComponent } from './modules/shared/table/actionsUserGame/delete-user-game/delete-user-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AlertDialogComponent,
    LogoutComponent,
    NotfoundComponent,
    GameComponent,
    StoreComponent,
    GameDetailsComponent,
    RegisterComponent,
    AdminComponent,
    UsersListComponent,
    UsersComponent,
    EditUserComponent,
    DeleteUserComponent,
    EditUserComponent,
    GamesListComponent,
    EditGameComponent,
    DeleteGameComponent,
    CreateGameComponent,
    ProfileComponent,
    TableComponent,
    ConfirmDialogComponent,
    EditUserGameComponent,
    DeleteUserGameComponent
  ],
  imports: [
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
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatCardModule,
    GamesRoutingModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
