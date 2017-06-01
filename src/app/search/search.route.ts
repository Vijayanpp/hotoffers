import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    // { path: '', component: SearchComponent },
{ path: 'products', component: SearchComponent }];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);