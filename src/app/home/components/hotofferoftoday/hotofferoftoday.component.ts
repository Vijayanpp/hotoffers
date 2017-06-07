import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-hotofferoftoday',
  templateUrl: './hotofferoftoday.component.html',
  styleUrls: ['./hotofferoftoday.component.css']
})
export class HotofferoftodayComponent implements OnInit {

  public items: FirebaseListObservable<any>;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('/hotoffers');
  }
  ngOnInit() {

  }


}
