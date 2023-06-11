import { Component } from '@angular/core';
import { BaseContainerComponent } from 'src/app/shared/base-component';
import { Store } from '../../store.model';
import { StoreService } from '../../store.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-store-registration-basic-information',
  templateUrl: './store-registration-basic-information.component.html',
  styleUrls: ['./store-registration-basic-information.component.scss'],
})
export class StoreRegistrationBasicInformationComponent extends BaseContainerComponent<Store> {
  store: Store | null = null;

  constructor(
    public storeService: StoreService,
    public override route: ActivatedRoute,
    public authService: AuthService
  ) {
    super(storeService, route, '');
  }

  override ngOnInit(): void {
    super.ngOnInit();

    if (this.authService.shop) {
      this.store = this.authService.shop;
    } else {
      this.helper.notification.alertDanger('Register your store first');
      this.router.navigate(['/']);
    }
  }
}
