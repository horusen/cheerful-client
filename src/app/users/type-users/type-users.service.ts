import { Injectable } from '@angular/core';
import { TypeUsers } from './type-users.model';
import { BaseService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class TypeUsersService extends BaseService<TypeUsers> {
  constructor() {
    super('type-users');
  }
}
