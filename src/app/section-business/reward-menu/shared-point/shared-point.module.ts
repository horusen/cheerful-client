import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadPointsComponent } from './load-points/load-points.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransferPointsComponent } from './transfer-points/transfer-points.component';
import { TransferPointConnectionListComponent } from './transfer-points/transfer-point-connection-list/transfer-point-connection-list.component';

@NgModule({
  declarations: [LoadPointsComponent, TransferPointsComponent, TransferPointConnectionListComponent],
  exports: [LoadPointsComponent, TransferPointsComponent],
  imports: [CommonModule, SharedModule],
})
export class SharedPointModule {}
