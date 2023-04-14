import { createAction, props } from "@ngrx/store";
import { LogInParams, User } from "../../models/user.model";


export const login = createAction(
  '[User] Login',
  props<LogInParams>()
)

export const loginSuccess = createAction(
  '[User] Login success',
  props<{ user: User }>()
)

export const loginFail = createAction(
  '[User] Login fail',
  props<{ errorMsg: string }>()
)