import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { StoreSocialMedia } from '../store-social-media.model';
import { StoreSocialMediaService } from '../store-social-media.service';
import { SocialMediaService } from 'src/app/common/social-media/social-media.service';
import { SocialMedia } from 'src/app/common/social-media/social-media.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-store-social-media-create',
  templateUrl: './store-social-media-create.component.html',
  styleUrls: ['./store-social-media-create.component.scss'],
})
export class StoreSocialMediaCreateComponent extends BaseCreateComponent<StoreSocialMedia> {
  socialMediaList: SocialMedia[] = [];

  constructor(
    public storeSocialMediaService: StoreSocialMediaService,
    public socialMediaService: SocialMediaService,
    public authService: AuthService
  ) {
    super(storeSocialMediaService);
  }

  initForm() {
    this.form = this.fb.group({
      store_id: [null, [Validators.required]],
      social_media_id: [null, [Validators.required]],
      link: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.initForm();

    if (this.authService.shop) {
      this.form.patchValue({
        store_id: this.authService.shop.id,
      });
    } else {
      this.helper.notification.alertDanger('You must create a store first');
      this.router.navigate(['/']);
    }

    this.socialMediaService.get().subscribe();

    this.subscriptions['socialMediaList'] =
      this.socialMediaService.data$.subscribe((data) => {
        this.socialMediaList = data;
      });
  }

  override create() {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid form');
      return;
    }

    const data = {
      ...this.form.value,
      social_media_id: Number(this.form.value.social_media_id),
    };

    this.storeSocialMediaService.store(data).subscribe((res) => {
      this.helper.notification.alertSuccess();
      this.form.reset();
      // this.router.navigate(['/']);
    });
  }
}
