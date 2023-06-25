import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreProductComponent } from './store-product.component';
import { StoreProductCreateComponent } from './store-product-create/store-product-create.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StoreProductComponent,
  },
];

@NgModule({
  declarations: [StoreProductComponent, StoreProductCreateComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class StoreProductModule {}
