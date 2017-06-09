export interface SearchResult{
    readonly data:Array<Object>
}

export function setSearchData(searchResult:SearchResult,data:Object):  SearchResult {
let searchdata=Object.assign({},searchResult,data);
return searchdata;
}