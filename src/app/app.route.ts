import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GiftvoucherresultComponent } from './giftvoucherresult/giftvoucherresult.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'products', loadChildren: './search/search.module#SearchModule' },
    { path: 'giftvouchers', component: GiftvoucherresultComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'privacypolicy', component: PrivacypolicyComponent },
    { path: 'termsandcondition', component: TermsandconditionsComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);