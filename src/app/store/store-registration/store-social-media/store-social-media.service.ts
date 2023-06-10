import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { StoreSocialMedia } from './store-social-media.model';

@Injectable({
  providedIn: 'root',
})
export class StoreSocialMediaService extends BaseService<StoreSocialMedia> {
  constructor() {
    super('store-social-media');
  }
}
