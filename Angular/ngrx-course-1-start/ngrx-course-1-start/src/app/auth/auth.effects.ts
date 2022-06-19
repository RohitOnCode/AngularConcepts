import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { dispatch } from "rxjs/internal/observable/pairs";
import { tap } from "rxjs/operators";
import { AuthAction } from "./action-types";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthEffects {


    constructor(private actions$ : Actions, private router: Router){

    }
     login$=createEffect(() =>
     this.actions$
     .pipe(
        ofType(AuthAction.login),
        tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
      )
    , {dispatch : false});


    // creatinglohout effect to cause the local entry to removed
   // from local storageonce the logout actionhas been dispatchedand
    //logout reducer has executed

    logout$=createEffect(()=>
    
    this.actions$.pipe(
        ofType(AuthAction.logout),
        tap(action=>{
            localStorage.removeItem('user'),
            this.router.navigateByUrl("/login");

        })

    ),
    {dispatch:false});
}