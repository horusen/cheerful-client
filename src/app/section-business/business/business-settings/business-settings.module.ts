import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessSettingsComponent } from './business-settings.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BusinessSettingsBusinessInformationComponent } from './business-settings-business-information/business-settings-business-information.component';
import { BusinessSettingsBusinessInformationEditComponent } from './business-settings-business-information/business-settings-business-information-edit/business-settings-business-information-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessSettingsComponent,
    children: [
      {
        path: 'business-information',
        component: BusinessSettingsBusinessInformationComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    BusinessSettingsComponent,
    BusinessSettingsBusinessInformationComponent,
    BusinessSettingsBusinessInformationEditComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class BusinessSettingsModule {}
