import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointLoadListComponent } from './point-load-list/point-load-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PointLoadComponent } from './point-load.component';
import { SharedPointModule } from '../../shared-point/shared-point.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PointLoadComponent,
  },
];

@NgModule({
  declarations: [PointLoadListComponent, PointLoadComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SharedPointModule,
  ],
})
export class PointLoadModule {}
