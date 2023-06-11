import { Component } from '@angular/core';
import { BaseContainerComponent } from 'src/app/shared/base-component';
import { StoreSocialMedia } from './store-social-media.model';
import { StoreSocialMediaService } from './store-social-media.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-store-social-media',
  templateUrl: './store-social-media.component.html',
  styleUrls: ['./store-social-media.component.scss'],
})
export class StoreSocialMediaComponent extends BaseContainerComponent<StoreSocialMedia> {
  constructor(
    public storeSocialMediaService: StoreSocialMediaService,
    public override route: ActivatedRoute,
    public authService: AuthService
  ) {
    super(storeSocialMediaService, route, '');
  }

  override ngOnInit(): void {
    this.subscriptions['data'] = this.storeSocialMediaService.data$.subscribe(
      (data) => {
        this.data = data;
        console.log(this.data);
      }
    );
    this.getByStoreId();
  }

  getByStoreId() {
    this.loading = true;
    this.storeSocialMediaService
      .getByStoreId(this.authService.shop?.id!)
      .subscribe(() => {
        this.loading = false;
      });
  }
}
