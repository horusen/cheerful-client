import { ApiResponse } from './../shared/models/ApiResponse';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Storage } from '../helpers/storage/storage';
import { BaseService } from '../shared/services';
import { User } from '../users/users.model';
import { Store } from '../store/store.model';

interface LoginInformation {
  user: User;
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<any> {
  // TODO: revert this back to user
  get user(): User {
    // return this.storage.get('user') as User;
    return {
      id: 1,
      name: 'John Doe',
      email: '',
      phone_number: '',
      type_user_id: 1,
    };
  }

  // TODO: revert this back to store
  get shop(): Store {
    // return this.storage.get('store') as User;
    return {
      id: 1,
      name: 'Bella Store',
      phone_number: '',
      type_store_id: 1,
      category_store_id: 1,
      description: '',
      store_online_link: '',
    };
  }

  constructor(public storage: Storage) {
    super('auth');
  }

  public signup(elements: User) {
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
      map((response) => response.user)
    );
  }

  private storeLoginInformation(data: any) {
    this.storage.clear();
    this.storage.set('accessToken', data.accessToken);
    this.storage.set('user', data.user);
    this.storage.set('store', data.store);
  }

  isLoggedIn() {
    return this.storage.getAccessToken() && this.storage.getUser();
  }
}
