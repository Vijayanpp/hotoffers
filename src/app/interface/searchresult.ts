export interface SearchResult{
    readonly data:Array<Object>
}

export function setSearchData(searchResult:SearchResult,datas:Array<Object>):  SearchResult {
let o={data:datas};
let searchresult=Object.assign({},searchResult,o);
return searchResult;
}