import { Component, OnInit } from '@angular/core';

declare var algoliasearch;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public client = algoliasearch('69U4RMWRMP', '756890d079951643e8bed822f65bca5d');
  constructor() { }

  ngOnInit() {
   
    var index = this.client.initIndex('hotoffers');
   index.search('$280.00', function(err, content) {
   console.log(content.hits);
});
    
  }

}
