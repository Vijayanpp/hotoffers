import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from '../createAction';
import { AppState } from '../../interface/appState';

@Injectable()
export class SearchActions {

    static STARTSEARCH = 'STARTSEARCH';
    static SHOWSEARCHDATA = 'SHOWSEARCHDATA'
    constructor(private store: Store<AppState>) {
    }

    searchQuery(data: Object) {
        this.store.dispatch(createAction(SearchActions.STARTSEARCH, data));
    }

    showSearchData(data: Object) {
        this.store.dispatch(createAction(SearchActions.SHOWSEARCHDATA, data));
    }




}