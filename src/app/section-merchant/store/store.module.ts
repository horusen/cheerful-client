import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./store-registration/store-registration.module').then(
            (m) => m.StoreRegistrationModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class StoreModule {}
