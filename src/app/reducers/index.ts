import { createSelector } from "@ngrx/store";
import * as fromUser from './user/user.reducers';

export interface AppState {
  user: fromUser.UserState;
}

export const selectUser = (state: AppState) => state.user;

export const selectCurrentUser = createSelector(
  selectUser,
  fromUser.getUser
)

export const selectLoggedIn = createSelector(
  selectUser,
  fromUser.getLoggedIn
)

export const selectIsLoading = createSelector(
  selectUser,
  fromUser.getIsLoading
)

export const selectErrorMsg = createSelector(
  selectUser,
  fromUser.getErrorMsg
)

export const selectHasError = createSelector(
  selectUser,
  fromUser.getHasError
)