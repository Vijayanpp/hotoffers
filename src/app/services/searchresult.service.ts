import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../interface/appstate';


@Injectable()
export class SearchresultService {


   constructor(private store: Store<AppState>) {}

  getSearchResult():Observable<any>{
return this.store.select(appState => appState.searchresult);
    
  }

   getSearchWord():Observable<any>{
return this.store.select(appState => appState.searchword);
    
  }
}
