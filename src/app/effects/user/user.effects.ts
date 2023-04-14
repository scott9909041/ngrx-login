import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import * as userAction from '../../actions/user/user.actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userAction.login),
      switchMap(payload => {
        return this.authService.doLogin(payload).pipe(
          map(user => userAction.loginSuccess({ user })),
          catchError(error => of(userAction.loginFail({ errorMsg: error.message })))
        )
      })
    )
  });

}