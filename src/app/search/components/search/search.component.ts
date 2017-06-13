import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SearchActions } from '../../../store/actions/search.action';
import { SearchresultService } from '../../../services/searchresult.service';

declare var algoliasearch;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchresult: Array<Object>;
  
  public client = algoliasearch('69U4RMWRMP', '756890d079951643e8bed822f65bca5d');
  constructor(public searchresultService: SearchresultService, public actions: SearchActions) { }

  ngOnInit() {

    var index = this.client.initIndex('hotoffers');
    var self = this;
    index.search('$280.00', function (err, content) {
      self.searchresult = content.hits[0].Bestseller;
      self.kk(self.searchresult);

    });

  }
  kk(data) {

    this.actions.showSearchData(data);
    this.pp()
  }
  pp() {
    this.searchresultService.getSearchResult().subscribe(data => {
      console.log(data)
    })
  }
  ngAfterContentInit() {
    this.searchresultService.getSearchResult().subscribe(data => {
      console.log(data)
    })

  }
}
