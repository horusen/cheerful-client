import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreSocialMediaComponent } from './store-social-media.component';
import { StoreSocialMediaCreateComponent } from './store-social-media-create/store-social-media-create.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StoreSocialMediaComponent,
  },
];

@NgModule({
  declarations: [StoreSocialMediaComponent, StoreSocialMediaCreateComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class StoreSocialMediaModule {}
