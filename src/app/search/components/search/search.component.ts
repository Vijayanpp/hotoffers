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
  private searchresult: Array<Object>;
  public searchDataFromStore;
  public client = algoliasearch('69U4RMWRMP', '756890d079951643e8bed822f65bca5d');
  constructor(public searchresultService: SearchresultService, public actions: SearchActions) { }

  ngOnInit() {
 this.getSearchWord();
  }

  /**
   * Function to populate Store
   */
  populateStore(key) {
    var index = this.client.initIndex('hotoffers');
    var self = this;
    index.search(key, function (err, content) {
      console.log(content.hits[0])
      self.searchresult = content.hits[0]['Suits'];
      self.addDataToStore(self.searchresult);

    });
  }

  /**
   * Function to add data to store
   */
  addDataToStore(data) {    
    this.actions.showSearchData(data);
    this.getDataFromStore()
  }

  /**
   * function to get data from store
   */
  getDataFromStore() {
    this.searchresultService.getSearchResult().subscribe(data => {
      this.searchDataFromStore =data.searchdata;  
    })
  }
  getSearchWord()
  {
    this.searchresultService.getSearchWord().subscribe(data => {
      console.log(1,data)
       this.populateStore(data.searchword)
    })
  }

}
