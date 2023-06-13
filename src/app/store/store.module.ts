import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { StoreHeaderComponent } from './store-header/store-header.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () =>
          import('./store-registration/store-registration.module').then(
            (m) => m.StoreRegistrationModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [StoreComponent, StoreHeaderComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class StoreModule {}
