import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogInParams, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  doLogin(params: LogInParams): Observable<User> {
    if (params.username !== 'scott') {

      return new Observable(subscriber => {
        setTimeout(() => {
          subscriber.error({
            message: 'No match for username:' + ' ' + params.username
          });
        }, 1500);
      })

    } else {

      return new Observable(subscriber => {
        setTimeout(() => {
          subscriber.next({
            firstName: 'Scott',
            lastName: 'Su'
          });
          subscriber.complete();
        }, 3500);
      });

    }
    
  }
}
