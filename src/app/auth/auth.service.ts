import { ApiResponse } from './../shared/models/ApiResponse';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Storage } from '../helpers/storage/storage';
import { BaseService } from '../shared/services';
import { User } from '../users/users.model';

interface LoginInformation {
  user: User;
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<any> {
  get user() {
    return this.storage.get('user') as User;
  }

  constructor(public storage: Storage) {
    super('auth');
  }

  public signup(elements: User) {
    console.log('hitted');

    return this.factory.post(`auth/signup/`, elements).pipe(
      tap({
        next: (response) => {
          this.storeLoginInformation(response.data);
        },
        error: (error) => this.errorResponseHandler(error),
      })
    );
  }

  // TODO: Ensure type safety
  public login(elements: Partial<User>) {
    return this.factory.post(`auth/login/`, elements).pipe(
      tap({
        next: ({ data }: any) => {
          this.storeLoginInformation(data);
        },
        error: (error) => this.errorResponseHandler(error),
      }),
      map((response) => response.business)
    );
  }

  private storeLoginInformation(data: any) {
    this.storage.clear();
    this.storage.set('accessToken', data.accessToken);
    this.storage.set('user', data.user);
  }

  isLoggedIn() {
    return this.storage.getAccessToken() && this.storage.getUser();
  }
}
