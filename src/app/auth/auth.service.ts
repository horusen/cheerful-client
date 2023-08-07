import { ApiResponse } from './../shared/models/ApiResponse';
import { tap, map } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Storage } from '../helpers/storage/storage';
import { BaseService } from '../shared/services';
import { User } from '../users/users.model';
import { Business } from '../section-business/business/business.model';
import { HttpErrorResponse } from '@angular/common/http';
import { TypeUserEnum } from '../users/type-users/type-user.enum';
import { Router } from '@angular/router';
import { InvitationService } from '../section-business/connection/invitation/invitation.service';

interface LoginInformation {
  user: User;
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<any> {
  // public store$ = new ReplaySubject<Store>(1);
  private _registrationUserType: TypeUserEnum = TypeUserEnum.BusinessAdmin;

  public user$ = new ReplaySubject<User>(1);
  public registrationUserType$ = new ReplaySubject<TypeUserEnum>(1);
  public business$ = new ReplaySubject<Business>(1);
  public typeUser$ = new ReplaySubject<TypeUserEnum>(1);

  get user(): User {
    return this.storage.get('user') as User;
  }

  get registrationUserType(): TypeUserEnum {
    return this._registrationUserType;
  }

  get typeUser(): TypeUserEnum {
    return this.storage.get('typeUser') as TypeUserEnum;
  }

  set registrationUserType(typeUser: TypeUserEnum) {
    this._registrationUserType = typeUser;
    this.registrationUserType$.next(typeUser);
  }

  set typeUser(typeUser: TypeUserEnum) {
    this.storage.set('typeUser', typeUser);
    this.typeUser$.next(typeUser);
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

  constructor(
    public storage: Storage,
    public router: Router,
    public invitationService: InvitationService
  ) {
    super('auth');
  }

  public signup(elements: User) {
    return this.factory.post(`auth/signup/`, elements).pipe(
      tap({
        next: (response: { data: any }) => {
          this.storeLoginInformation(response.data);
          if (response.data.typeUser == TypeUserEnum.Individual) {
            this.storage.delete('temp_user_info');
          }
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

  public updatePointBalance(amount: number) {
    if (this.typeUser == TypeUserEnum.Individual) {
      this.user = {
        ...this.user,
        point_balance: this.user?.point_balance! + amount,
      };
    } else if (this.typeUser == TypeUserEnum.BusinessAdmin) {
      this.business = {
        ...this.business,
        point_balance: this.business?.point_balance! + amount,
      };
    }
  }

  private storeLoginInformation(data: any) {
    this.storage.clear();
    this.storage.set('accessToken', data.accessToken);
    this.user = data.user;
    this.typeUser = data.type_user;
    this.business = data.business;
  }

  isLoggedIn() {
    return this.storage.getAccessToken() && this.storage.getUser();
  }

  public logout() {
    this.storage.clear();
    this.router.navigate(['/authentication/login']);
  }
}
