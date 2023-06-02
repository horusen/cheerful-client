import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileItemsComponent } from './profile-items/profile-items.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'explore',
        component: ExploreComponent,
      },
      {
        path: 'products/:productId/details',
        component: ProductDetailComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'profile/items/:itemId',
        component: ProfileItemsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    ExploreComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    ProfileComponent,
    ProfileItemsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MainModule {}
