import { Component } from '@angular/core';
import { BaseContainerComponent } from 'src/app/shared/base-component';
import { Business } from '../../business.model';
import { BusinessService } from '../../business.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-business-settings-business-information',
  templateUrl: './business-settings-business-information.component.html',
  styleUrls: ['./business-settings-business-information.component.scss'],
})
export class BusinessSettingsBusinessInformationComponent extends BaseContainerComponent<Business> {
  constructor(
    public businessService: BusinessService,
    public _route: ActivatedRoute,
    public authService: AuthService
  ) {
    super(businessService, _route, '');
  }
}
