import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';
@Component({
  selector: 'my-app',
  template: `
        <!--Set-->
        <input type="text" #favouriteHero placeholder="Favourite Hero" /><br>
        <button (click)="setData(favouriteHero.value)">SetData</button>
        <button (click)="updateData(favouriteHero.value)">UpdateData</button><br>
        <p>{{(items | async)?.name}}</p>
`
})
export class AppComponent {

  af: AngularFire;
  items: FirebaseObjectObservable<any>;

  //UPDATE WORK
  constructor(af: AngularFire) {
    this.af       = af;
    this.items    = af.database.object('/items');
    this.items.remove();

  }

  setData(newData) {
    this.items.set({name: newData});
  }

  updateData(newData) {
    this.items.update({name: newData});
  }
 }
