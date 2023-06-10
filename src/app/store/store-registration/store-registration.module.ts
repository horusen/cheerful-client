import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRegistrationComponent } from './store-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreRegistrationBasicInformationComponent } from './store-registration-basic-information/store-registration-basic-information.component';

const routes: Routes = [
  {
    path: '',
    component: StoreRegistrationComponent,
    children: [
      {
        path: 'basic-information',
        loadChildren: () =>
          import(
            './store-registration-basic-information/store-registration-basic-information.module'
          ).then((m) => m.StoreRegistrationBasicInformationModule),
      },
      {
        path: 'addresses',
        loadChildren: () =>
          import(
            './store-registration-address/store-registration-address.module'
          ).then((m) => m.StoreRegistrationAddressModule),
      },
      {
        path: 'social-medias',
        loadChildren: () =>
          import('./store-social-media/store-social-media.module').then(
            (m) => m.StoreSocialMediaModule
          ),
      },
      {
        path: 'payment-methods',
        loadChildren: () =>
          import('./store-payment-method/store-payment-method.module').then(
            (m) => m.StorePaymentMethodModule
          ),
      },
      {
        path: '',
        redirectTo: 'basic-information',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [StoreRegistrationComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class StoreRegistrationModule {}
