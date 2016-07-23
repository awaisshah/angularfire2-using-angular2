import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';


bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
		    apiKey: "AIzaSyCpy3zin1OWfPyFNL_dUwDFwxuMCumUKqw",
        authDomain: "helloworld-797b6.firebaseapp.com",
        databaseURL: "https://helloworld-797b6.firebaseio.com",
        storageBucket: "helloworld-797b6.appspot.com",
  })
]);
