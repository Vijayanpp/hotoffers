import { Component, OnInit } from '@angular/core';
import { SearchActions } from '../store/actions/search.action';
import { SearchresultService } from '../services/searchresult.service';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  public word:any;

  constructor(private actions: SearchActions, private searchresultService: SearchresultService) { }

  ngOnInit() {    
  }
  
 startSearch(word)
 {
 this.actions.searchWord(word);
 }
}
