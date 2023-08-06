import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointComponent } from './point.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PointHistoryComponent } from './point-history/point-history.component';
import { SharedPointModule } from '../shared-point/shared-point.module';

const routes: Routes = [
  {
    path: '',
    component: PointComponent,
  },
];

@NgModule({
  declarations: [PointComponent, PointHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SharedPointModule,
  ],
  exports: [RouterModule],
})
export class PointModule {}
