import { Injectable } from '@angular/core';
import { Industry } from './industry.model';
import { BaseService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class IndustryService extends BaseService<Industry> {
  constructor() {
    super('industry');
  }
}
