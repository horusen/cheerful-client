import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorePaymentMethodComponent } from './store-payment-method.component';
import { StorePaymentMethodCreateComponent } from './store-payment-method-create/store-payment-method-create.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StorePaymentMethodComponent,
  },
];

@NgModule({
  declarations: [
    StorePaymentMethodComponent,
    StorePaymentMethodCreateComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class StorePaymentMethodModule {}
