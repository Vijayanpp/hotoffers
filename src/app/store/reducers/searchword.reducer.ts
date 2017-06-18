import { Action } from '@ngrx/store';
import { SearchWord,setSearchWord } from '../../interface/searchresult';
import { SearchActions } from '../actions/search.action';

export  function searchWordReducer(searchword:SearchWord={searchword:''}, action: Action):Object {
  
    switch (action.type) {
        case SearchActions.STARTSEARCH:
            return setSearchWord(searchword,action.payload);
        
      
        default:
            return searchword;
    }
}