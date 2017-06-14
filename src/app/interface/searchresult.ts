export interface SearchResult{
    readonly searchdata:Array<Object>
}

export function setSearchData(searchResult:SearchResult,data:Array<Object>):  SearchResult {
let o={searchdata:data};
let searchdata=Object.assign({},searchResult,o);
return searchdata;
}