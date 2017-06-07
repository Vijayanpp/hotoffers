import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-producttab',
  templateUrl: './producttab.component.html',
  styleUrls: ['./producttab.component.css']
})
export class ProducttabComponent implements OnInit {

  public tshirt: FirebaseListObservable<any>;
  public outerwaer: FirebaseListObservable<any>;
  public jeans: FirebaseListObservable<any>;
  public suits: FirebaseListObservable<any>;

  constructor(public db: AngularFireDatabase) {
    this.tshirt = db.list('/Tshirt');
    this.outerwaer = db.list('/Outwear');
    this.jeans = db.list('/Jeans');
    this.suits = db.list('/Suits');

  }

  ngOnInit() {
  }

}
