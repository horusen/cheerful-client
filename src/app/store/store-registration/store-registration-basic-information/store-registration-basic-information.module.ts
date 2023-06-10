import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRegistrationBasicInformationCreateComponent } from './store-registration-basic-information-create/store-registration-basic-information-create.component';
import { StoreRegistrationBasicInformationComponent } from './store-registration-basic-information.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StoreRegistrationBasicInformationComponent,
  },
];

@NgModule({
  declarations: [
    StoreRegistrationBasicInformationCreateComponent,
    StoreRegistrationBasicInformationComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class StoreRegistrationBasicInformationModule {}
