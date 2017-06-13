import { Action } from '@ngrx/store';
import { SearchResult,setSearchData } from '../../interface/searchresult';
import { SearchActions } from '../actions/search.action';

export  function searchReducer(searchdata:SearchResult={data:[]}, action: Action):Object {
  
    switch (action.type) {
        case SearchActions.SHOWSEARCHDATA:
            return setSearchData(searchdata,action.payload);
      
        default:
            return searchdata
    }
}