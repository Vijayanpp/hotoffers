export interface SearchResult{
    readonly searchdata:Array<Object>;
}
export interface SearchWord{
    readonly searchword:Object;
}
export function setSearchData(searchResult:SearchResult,data:Array<Object>):  SearchResult {
let o={searchdata:data};
let searchdata=Object.assign({},searchResult,o);
return searchdata;
}

export function setSearchWord(searchWord:SearchWord,data:Object):  SearchWord {
let o={searchword:data};
let searchword=Object.assign({},searchWord,o);
return searchword;
}