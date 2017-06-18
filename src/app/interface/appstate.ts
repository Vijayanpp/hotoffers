import { SearchResult, SearchWord} from './searchresult';

export interface AppState {
    readonly searchresult: SearchResult;
    readonly searchword:SearchWord;
}