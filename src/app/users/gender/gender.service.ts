import { Injectable } from '@angular/core';
import { BaseMockService } from 'src/app/shared/services/base-mock.service';
import { Gender } from './gender.model';
import { genders } from 'src/app/mocks/gender.mock';
import { BaseService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class GenderService extends BaseService<Gender> {
  constructor() {
    super('gender');
  }
}
