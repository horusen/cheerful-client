import { Injectable } from '@angular/core';
import { TypeUsers } from './type-users.model';
import { BaseMockService } from 'src/app/shared/services/base-mock.service';
import { typeUsers } from 'src/app/mocks/type-users.mock';
import { BaseService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class TypeUsersService extends BaseService<TypeUsers> {
  constructor() {
    super('type-users');
  }
}
