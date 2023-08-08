import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorefrontComponent } from './storefront.component';
import { StorefrontGiftcardComponent } from './storefront-giftcard/storefront-giftcard.component';
import { StorefrontLocationComponent } from './storefront-location/storefront-location.component';
import { StorefrontAboutComponent } from './storefront-about/storefront-about.component';
import { RouterModule, Routes } from '@angular/router';
import { StorefrontCatalogueComponent } from './storefront-catalogue/storefront-catalogue.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GiftCardShowComponent } from '../gift-card/gift-card-show/gift-card-show.component';

const routes: Routes = [
  {
    path: ':id',
    component: StorefrontComponent,
    children: [
      {
        path: 'giftcard',
        component: StorefrontGiftcardComponent,
      },
      {
        path: 'location',
        component: StorefrontLocationComponent,
      },
      {
        path: 'catalogue',
        component: StorefrontCatalogueComponent,
      },
      {
        path: 'about',
        component: StorefrontAboutComponent,
      },
      {
        path: '',
        redirectTo: 'giftcard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/explore',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    StorefrontComponent,
    StorefrontGiftcardComponent,
    StorefrontLocationComponent,
    StorefrontAboutComponent,
    StorefrontCatalogueComponent,
    GiftCardShowComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class StorefrontModule {}
