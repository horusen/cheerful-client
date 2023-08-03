import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BusinessComponent],
  imports: [CommonModule, SharedModule],
})
export class BusinessModule {}
