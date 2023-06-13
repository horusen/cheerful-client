import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRegistrationAddressComponent } from './store-registration-address.component';
import { StoreRegistrationAddressCreateComponent } from './store-registration-address-create/store-registration-address-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StoreRegistrationAddressComponent,
  },
];

@NgModule({
  declarations: [
    StoreRegistrationAddressComponent,
    StoreRegistrationAddressCreateComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class StoreRegistrationAddressModule {}
