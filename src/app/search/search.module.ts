import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';

import { routing } from './search.route';
@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
