import { searchReducer } from './reducers/search.reducer';
import { searchWordReducer } from './reducers/searchword.reducer'
export const rootReducer = {
    searchresult: searchReducer,
    searchword: searchWordReducer
};