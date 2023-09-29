import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { MarketplaceStoreListComponent } from './marketplace-store-list/marketplace-store-list.component';
import { MarketplaceStoreDetailsComponent } from './marketplace-store-details/marketplace-store-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MarketplaceComponent,
    children: [
      {
        path: '',
        component: MarketplaceStoreListComponent,
      },
      {
        path: 'store',
        loadChildren: () =>
          import('./storefront/storefront.module').then(
            (module) => module.StorefrontModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [
    MarketplaceComponent,
    MarketplaceStoreListComponent,
    MarketplaceStoreDetailsComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class MarketplaceModule {}
