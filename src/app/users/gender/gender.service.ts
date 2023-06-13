import { Injectable } from '@angular/core';
import { Gender } from './gender.model';
import { BaseService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class GenderService extends BaseService<Gender> {
  constructor() {
    super('gender');
  }
}
