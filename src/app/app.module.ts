import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';
import { AppComponent } from './app.component';
import { Routing } from './app.route';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import 'rxjs/Rx';

import { rootReducer } from './store/rootReducer';
import { SearchActions } from './store/actions/search.action';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SearchresultService } from './services/searchresult.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './shared/constants/constant';
import { GiftvoucherresultComponent } from './giftvoucherresult/giftvoucherresult.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    SearchboxComponent,
    GiftvoucherresultComponent,
    AboutusComponent,
    ContactusComponent,
    TermsandconditionsComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HomeModule,
    SearchModule,
    Routing,
    StoreModule.provideStore(rootReducer)
  ],
  providers: [SearchresultService,SearchActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
