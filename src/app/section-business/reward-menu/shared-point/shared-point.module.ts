import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadPointsComponent } from './load-points/load-points.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoadPointsComponent],
  exports: [LoadPointsComponent],
  imports: [CommonModule, SharedModule],
})
export class SharedPointModule {}
