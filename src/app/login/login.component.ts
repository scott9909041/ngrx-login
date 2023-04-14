import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as userAction from '../actions/user/user.actions';
import { User } from '../models/user.model';
import * as fromRoot from '../reducers/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading$: Observable<boolean>;
  hasError$: Observable<boolean>;
  errorMsg$: Observable<string>;
  user$: Observable<User | undefined>;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.AppState>
  ) {
    this.isLoading$ = this.store.select(fromRoot.selectIsLoading);
    this.hasError$ = this.store.select(fromRoot.selectHasError);
    this.errorMsg$ = this.store.select(fromRoot.selectErrorMsg);
    this.user$ = this.store.select(fromRoot.selectCurrentUser);
    this.isLoggedIn$ = this.store.select(fromRoot.selectLoggedIn);
  }

  loginForm: FormGroup = this.fb.group({
    username: [],
    password: []
  })

  ngOnInit(): void {
    
  }

  doLogin(): void {
    this.store.dispatch(userAction.login(this.loginForm.value));
  }

}
