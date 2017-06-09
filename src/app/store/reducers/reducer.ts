import { Action } from '@ngrx/store';
import { SearchResult } from '../../interface/searchresult';
import { SearchActions } from '../actions/search.action';

export default function searchReducer(searchdata:SearchResult={data:[]}, action: Action): Object {
    switch (action.type) {
        case SearchActions.SHOWSEARCHDATA:
            return action.payload;
      
        default:
            return searchdata
    }
}