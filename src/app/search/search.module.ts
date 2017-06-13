import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from '../store/rootReducer';
import { routing } from './search.route';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore(rootReducer),
    routing
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
