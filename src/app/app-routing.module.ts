import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// Components
import { CardContainerComponent } from './componentes/card-container/card-container.component';
import { CardDetailsComponent } from './componentes/card-details/card-details.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: CardContainerComponent,
        children: [
            {
                path: ':cardId',
                component: CardDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
