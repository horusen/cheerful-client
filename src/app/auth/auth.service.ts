import { ApiResponse } from './../shared/models/ApiResponse';
import { tap, map } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Storage } from '../helpers/storage/storage';
import { BaseService } from '../shared/services';
import { User } from '../users/users.model';
import { Business } from '../section-business/business/business.model';
import { HttpErrorResponse } from '@angular/common/http';

interface LoginInformation {
  user: User;
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<any> {
  // public store$ = new ReplaySubject<Store>(1);
  public user$ = new ReplaySubject<User>(1);
  public business$ = new ReplaySubject<Business>(1);

  get user(): User {
    return this.storage.get('user') as User;
  }

  get business(): Business {
    return this.storage.get('business') as Business;
  }

  set business(business: Business) {
    if (business) {
      this.storage.set('business', business);
      this.business$.next(business);
    }
  }

  set user(user: User) {
    if (user) {
      this.storage.set('user', user);
      this.user$.next(user);
    }
  }

  // get isStoreSetup() {
  //   // Return false if one field of shop is empty
  //   let isShopSetup = true;
  //   Object.keys(this.shop).forEach((key) => {
  //     if (
  //       key != 'deleted_at' &&
  //       key != 'store_logo_image' &&
  //       // @ts-expect-error
  //       this.shop[key] == null
  //     ) {
  //       isShopSetup = false;
  //     }
  //   });
  //   return isShopSetup;
  // }

  // updateStore(store: Store) {
  //   this.storage.set('store', store);
  // }

  constructor(public storage: Storage) {
    super('auth');
  }

  public signup(elements: User) {
    return this.factory.post(`auth/signup/`, elements).pipe(
      tap({
        next: (response: { data: any }) => {
          this.storeLoginInformation(response.data);
        },
        error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
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
        error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
      }),
      map((response: any) => response.user)
    );
  }

  private storeLoginInformation(data: any) {
    this.storage.clear();
    this.storage.set('accessToken', data.accessToken);
    this.storage.set('user', data.user);
    this.storage.set('business', data.business);
  }

  isLoggedIn() {
    return this.storage.getAccessToken() && this.storage.getUser();
  }
}
