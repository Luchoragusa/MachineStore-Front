import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// Components
import { CardContainerComponent } from './componentes/card-container/card-container.component';
import { CardComponent } from './componentes/card/card.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
    },
    {
        path: 'cards',
        component: CardContainerComponent,
        // children: [
        //     {
        //     path: ':cardId',
        //     component: CardDetailsComponent
        //     }
        // ]
    },
    // {
    //     path: 'games',
    //     component: CharactersComponent,
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
