import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { AppState } from './reducers';
import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';
import { login, logout } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loading = true;
    isLoggedIn$ : Observable<boolean>;
    isLoggedOut$ :Observable<boolean>;


    constructor(private router: Router,private store :Store<AppState>) {

    }

    ngOnInit() {

//fetchvalue fromlocalstorage even on page refresh this value will be storedin the localStorage until it is cleared
// on page refresh the store value fromngRX goes off so,we read datafromlocalStorage and repopulate the store with login Action
const loginDetails= localStorage.getItem('user');
if(loginDetails){
  this.store.dispatch(login({user:JSON.parse(loginDetails)})) 
}



//logged In - check and render the value dynamically to display login andlogout button 
this.isLoggedIn$= this.store
.pipe(
  map(state=>
    {

      console.log("LoggedIn :" + state["auth"].value);
      return state;
    }) , 
  select(isLoggedIn),
  );


//

this.isLoggedOut$=this.store.pipe(map(state =>{
  
  console.log("LoggedOut"+state["auth"].value)
return state;
}),
select(isLoggedOut)
);


      this.router.events.subscribe(event  => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });

    }

    
  

      logout()
      {
    
        this.store.dispatch(logout());
      }

    

}
