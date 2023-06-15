import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService<any> {
  processing$ = new ReplaySubject<boolean>(1);
  constructor() {
    super('order');
  }
}
