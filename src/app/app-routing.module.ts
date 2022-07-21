import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// Components
import { CardContainerComponent } from './componentes/card-container/card-container.component';
import { CardDetailsComponent } from './componentes/card-details/card-details.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: CardContainerComponent,
    },
    {
        path: 'cards/:cardId',
        component: CardDetailsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
