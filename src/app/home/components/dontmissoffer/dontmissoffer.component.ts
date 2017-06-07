import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dontmissoffer',
  templateUrl: './dontmissoffer.component.html',
  styleUrls: ['./dontmissoffer.component.css']
})
export class DontmissofferComponent implements OnInit {

  public items: FirebaseListObservable<any>;
  constructor(public db: AngularFireDatabase) {
   this.items = db.list('/Offeroftheday');
  }
  ngOnInit() {
  }

}
