import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-business-settings',
  templateUrl: './business-settings.component.html',
  styleUrls: ['./business-settings.component.scss'],
})
export class BusinessSettingsComponent extends BaseComponent<any> {
  constructor(public authService: AuthService) {
    super();
  }
}
