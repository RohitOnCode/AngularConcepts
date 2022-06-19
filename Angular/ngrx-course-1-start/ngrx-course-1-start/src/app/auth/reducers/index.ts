import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { ActionType } from '@ngrx/store/src/models';
import { AuthAction } from '../action-types';
import { state } from '@angular/animations';



export const authFeatureKey = 'auth';

export interface AuthState {
user: User;
}


export const initialAuthState :AuthState={
  user : undefined
};


export const authReducer = createReducer(
  initialAuthState,
  on(AuthAction.login ,(state, action)=>{
    console.log("calling login reducer");
    
    return {
      user : action.user
    }
  }),
  
  on(AuthAction.logout, ( state,action ) =>
  {
    console.log("calling logout reducer")
    
    return{
      user: undefined
    }
  })
  
)



