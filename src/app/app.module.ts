import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { UserEffects } from './effects/user/user.effects';
import { LoginComponent } from './login/login.component';
import { userReducer } from './reducers/user/user.reducers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ user: userReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
