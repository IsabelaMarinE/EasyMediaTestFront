import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import * as UserActions from '../actions/user.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
    createUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.createUser),
            switchMap((action) =>
                from(this.UserService.createUser(action.request)).pipe(
                    map((response) => {
                        return UserActions.createUserSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(UserActions.createUserFail());
                    })
                )
            )
        )
    )

    logIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.logIn),
            switchMap((action) =>
                from(this.UserService.logIn(action.request)).pipe(
                    map((response) => {
                        return UserActions.logInSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(UserActions.logInFail({error}));
                    })
                )
            )
        )
    )

    logOut$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.logOut),
            switchMap((action) =>
                from(this.UserService.logOut(action.id)).pipe(
                    map((response) => {
                        return UserActions.logOutSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(UserActions.logOutFail(error))
                    })
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private UserService: UserService
    ) {

    }
}

