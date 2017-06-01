import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
     { path: 'products', loadChildren: './search/search.module#SearchModule' },
     { path: '**', redirectTo: 'home', pathMatch: 'full' }
   
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);