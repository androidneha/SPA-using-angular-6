import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoffeeListComponent} from './coffee-list/coffee-list.component';
import {CafeListComponent} from './cafe-list/cafe-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CoffeeDetailComponent} from './coffee-detail/coffee-detail.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/cafe', pathMatch: 'full'
    },
    {
      path: 'cafe', component: CafeListComponent
    },
    {
      path: 'coffee', component: CoffeeListComponent
    },
    {
        path: 'coffee/:id', component: CoffeeDetailComponent
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CoffeeListComponent, CoffeeDetailComponent, CafeListComponent, PageNotFoundComponent];
