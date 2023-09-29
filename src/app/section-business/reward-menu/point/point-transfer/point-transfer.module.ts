import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointTransferComponent } from './point-transfer.component';
import { PointTransferListComponent } from './point-transfer-list/point-transfer-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedPointModule } from '../../shared-point/shared-point.module';

const routes: Routes = [
  {
    path: '',
    component: PointTransferComponent,
  },
];

@NgModule({
  declarations: [PointTransferComponent, PointTransferListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SharedPointModule,
  ],
})
export class PointTransferModule {}
