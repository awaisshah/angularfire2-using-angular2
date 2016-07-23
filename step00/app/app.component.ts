import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'my-app',
  template: `<h1>Retrieve data</h1>'
    <h1>{{(item | async)?.name}}</h1>
    `
})
export class AppComponent { 
   item: FirebaseObjectObservable<any>
   constructor(af: AngularFire) {
      this.item = af.database.object('/items');
      console.log("data");
      
  }

}
