import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";


export const authFeatureSelector = createFeatureSelector<AuthState>("auth");
export const isLoggedIn = createSelector(
    authFeatureSelector,
    auth => !!auth.user
);


export const isLoggedOut =createSelector(
    isLoggedIn,
    loggedIn=> !loggedIn
);