import { ApiResponse } from './../shared/models/ApiResponse';
import { tap, map } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
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
  public store$ = new ReplaySubject<Store>(1);
  public user$ = new ReplaySubject<User>(1);

  // TODO: revert this back to user
  get user(): User {
    return this.storage.get('user') as User;
  }

  // TODO: revert this back to store
  get shop(): Store {
    return this.storage.get('store') as Store;
  }

  set shop(store: Store) {
    if (store) {
      this.storage.set('store', store);
      this.store$.next(store);
    }
  }

  set user(user: User) {
    if (user) {
      this.storage.set('user', user);
      this.user$.next(user);
    }
  }

  get isStoreSetup() {
    // Return false if one field of shop is empty
    let isShopSetup = true;
    Object.keys(this.shop).forEach((key) => {
      if (
        key != 'deleted_at' &&
        key != 'store_logo_image' &&
        // @ts-expect-error
        this.shop[key] == null
      ) {
        isShopSetup = false;
      }
    });
    return isShopSetup;
  }

  updateStore(store: Store) {
    this.storage.set('store', store);
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
