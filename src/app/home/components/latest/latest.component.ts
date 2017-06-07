import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-latestdeals',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  public saleoftheday: FirebaseListObservable<any>;
  public musthave: FirebaseListObservable<any>;
  public onsale: FirebaseListObservable<any>;
  public bestseller: FirebaseListObservable<any>;

  constructor(public db: AngularFireDatabase) {
    this.saleoftheday = db.list('/Saleoftheday');
    this.musthave = db.list('/Musthave');
    this.onsale = db.list('/Onsale');
    this.bestseller = db.list('/Bestseller');

  }

  ngOnInit() {  
  }

}
