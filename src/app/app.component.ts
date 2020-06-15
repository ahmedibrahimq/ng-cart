import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database/';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  items: Observable<any[]>;
  // items: any[];

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/products').valueChanges();
    // db.list('/products').valueChanges()
    //   .subscribe(items => {
    //     this.items = items;
    //     console.log(this.items);
    //   });
  }

}
