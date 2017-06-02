import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
declare var window;
declare var jQuery;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public items: FirebaseListObservable<any>;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('/slider');
  }
  ngOnInit() {

  }





}
