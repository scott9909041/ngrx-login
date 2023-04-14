import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/user.model";
import * as userAction from '../../actions/user/user.actions';

export interface UserState {
  user?: User;
  loggedIn: boolean;
  isLoading: boolean;
  errorMsg: string;
  hasError: boolean;
}

export const initialState: UserState = {
  loggedIn: false,
  isLoading: false,
  errorMsg: '',
  hasError: false
}

export const userReducer = createReducer(
  initialState,
  on(userAction.login, () => {
    return { ...initialState, isLoading: true };
  }),
  on(userAction.loginSuccess, (state, { user }) => {
    return { ...state, isLoading: false, hasError: false, loggedIn: true, user: user };
  }),
  on(userAction.loginFail, (state, { errorMsg }) => {
    return { ...state, loggedIn: false, hasError: true, isLoading: false, errorMsg };
  })
)

export const getLoggedIn = (state: UserState) => state.loggedIn;
export const getUser = (state: UserState) => state.user;
export const getIsLoading = (state: UserState) => state.isLoading;
export const getErrorMsg = (state: UserState) => state.errorMsg;
export const getHasError = (state: UserState) => state.hasError;