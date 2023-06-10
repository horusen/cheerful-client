import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { SocialMedia } from './social-media.model';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService extends BaseService<SocialMedia> {
  constructor() {
    super('social-media');
  }
}
