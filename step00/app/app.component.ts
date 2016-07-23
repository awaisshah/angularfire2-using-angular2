import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App With AngularFire 2</h1>'
})
export class AppComponent { 
   constructor(af: AngularFire) {

  }

}
