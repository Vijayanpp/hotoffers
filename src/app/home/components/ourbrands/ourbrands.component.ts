import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-ourbrands',
  templateUrl: './ourbrands.component.html',
  styleUrls: ['./ourbrands.component.css']
})
export class OurbrandsComponent implements OnInit {

  public items: FirebaseListObservable<any>;
  constructor(public db: AngularFireDatabase) {
  this.items = db.list('/Brands');

  }

  ngOnInit() {
  }

}
